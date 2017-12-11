import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


class Gitter {
  id: number;
  avatar_url: string;
  followers: number;
  following: number;
  login: string;
  name: string;
  public_repos: number;
  public_gists: number;
  repos_url: string;
  url: string;
}



@Injectable()
export class GithubService {

  constructor(private http: Http) { }

  obtain(username: string): Observable<Gitter> {
    return this.http.get(`https://api.github.com/users/${ username }`)
      .map(response => response.json());
  }
}
