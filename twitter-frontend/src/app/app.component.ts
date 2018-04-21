import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MzCardModule, MzIconModule, MzIconMdiModule } from 'ng2-materialize';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Twitter Test App';
  results = [];
  searchVal = "";
  userPage = false;
  userInfo = {};

  constructor(private http: HttpClient){}

  getHomeTimeline(){
    
    this.http.get('http://localhost:3000/api/home')
      .subscribe(data => {
        
        console.log(data['data']);
        this.results = data['data'];
        this.userPage = false;

      });
  }

  getSearch(){
    console.log(this.searchVal);
    this.http.post('http://localhost:3000/api/search', {"qString":this.searchVal})
      .subscribe(data => {
        console.log(data['data']);
        this.results = data['data']['statuses'];
        this.userPage = false;
      })
  }

  toggleFavorite(result: object){
    console.log(result['id']);
    console.log(result['favorited']);
    result['favorited'] = !result['favorited'];
    this.http.post('http://localhost:3000/api/favorite', {state:result['favorited'], id:result['id_str']})
      .subscribe(data => {
        console.log(data);
        result = data['data'];
        this.userPage = false;
      })

  }

  toggleRetweet(result: object){
    result['retweeted'] = !result['retweeted'];
    this.http.post('http://localhost:3000/api/retweet', {state:result['retweeted'], id:result['id_str']})
      .subscribe(data => {
        console.log(data);
        result = data['data'];
        this.userPage = false;
      })
  }

  getUserInfo(userID: string){
    console.log(userID);
    this.http.post('http://localhost:3000/api/user/show', {user_id:userID})
      .subscribe(data => {
        console.log(data['data']);
        this.results = [];
        this.userInfo = data['data'];
        this.userPage = true;
      })
  }

  toggleFollow(userInfo: object){
    userInfo['following'] = !userInfo['following'];
    this.http.post('http://localhost:3000/api/user/follow', {user_id: userInfo['id_str'], state: userInfo['following'] })
      .subscribe(data => {
        console.log(data['data']);
        if(data['data']){
          data['data']['following'] = userInfo['following'];
        }
        this.userInfo = data['data'];
        this.userPage = true;
      })
  }


}
