const express = require('express');
const Twitter = require('twit');

const app = express();
// Enter twitter api credentials here.
const client = new Twitter({
  consumer_key:'', //consumer key
  consumer_secret:'', //consumer secret
  access_token:'', // access token
  access_token_secret:'', // access token secret
});

app.use(require('cors')());
app.use(require('body-parser').json());

app.get('/api/user', (req, res) => {
  client
    .get('account/verify_credentials')
    .then(user => {
      res.send(user);
    })
    .catch(error => {
      res.send(error);
    });
});

let cache = [];
let cacheAge = 0;

app.get('/api/home', (req, res) => {
  if (Date.now() - cacheAge > 60000) {
    cacheAge = Date.now();
    const params = { tweet_mode: 'extended', count: 200 };
    if (req.query.since) {
      params.since_id = req.query.since;
    }
    client
      .get(`statuses/home_timeline`, params)
      .then(timeline => {
        cache = timeline;
        res.send(timeline);
      })
      .catch(error => res.send(error));
  } else {
    res.send(cache);
  }
});

app.post('/api/search', (req, res) => {
  console.log(req.body.qString);
  client
    .get('search/tweets', { q : req.body.qString })
    .then( tweets => res.send(tweets) )
    .catch(error => res.send(error));
});

app.post('/api/favorite', (req, res) => {
  const path = req.body.state ? 'create' : 'destroy';
  console.log(path);
  console.log(req.body);
  client
    .post(`favorites/${path}`, { id: req.body.id })
    .then(tweet => res.send(tweet))
    .catch(error => res.send(error));
});

app.post('/api/retweet', (req, res) => {
  const path = req.body.state ? 'retweet' : 'unretweet';
  client
    .post(`statuses/${path}/${req.body.id}`)
    .then(tweet => res.send(tweet))
    .catch(error => res.send(error));
});

app.post('/api/user/show', (req, res) => {
  client
    .get(`users/show`, {user_id: req.body.user_id})
    .then(user => res.send(user))
    .catch(error => res.send(error));
});

app.post('/api/user/follow', (req, res) => {
  const path = req.body.state ? 'create' : 'destroy';
  console.log(req.body);
  client
    .post(`friendships/${path}`, {user_id: req.body.user_id})
    .then(user => res.send(user))
    .catch(error => res.send(error));
})
app.listen(3000, () => console.log('Server running'));
