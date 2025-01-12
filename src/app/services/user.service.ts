import { HttpClient } from '@angular/common/http';
import { Injectable ,inject} from '@angular/core';
import User from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl="http://localhost:4000";
  httpClient=inject(HttpClient);

  constructor() { }

  getUsers(){
    return this.httpClient.get<User[]>(this.apiUrl + "/person");
  }
  getUser(id:string){
    return this.httpClient.get<User[]>(this.apiUrl + "/person/"+id);
  }

  addUser(model:User){
    return this.httpClient.post(this.apiUrl + "/person",model);
  }


  updateUser(id : string,model:User){
    return this.httpClient.put(this.apiUrl + "/person/" +id,model);
  }


  deleteUser(id:string){
    return this.httpClient.delete(this.apiUrl + "/person/" +id);
  }
}
