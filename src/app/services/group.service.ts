import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../models/Group';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'customHeader': 'customValue'
})
}
@Injectable({
  providedIn: 'root'
})
export class GroupService {
  groupsURL: string = 'http://mlipski.site:8080/Workshop3WS/webapi/group';
  groups: Observable<Group[]>;

  constructor(private http: HttpClient) { }

  getGroups() : Observable<Group[]> {
    return this.http.get<Group[]>(this.groupsURL);
  }

}
