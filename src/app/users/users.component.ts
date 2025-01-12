import { Component, inject } from '@angular/core';
import User from '../types/user';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: User[]=[];
  userService =inject(UserService);
  ngOnInit(){
    this.userService.getUsers().subscribe((results)=>{
      this.users=results;
      console.log("printing the users",results);
    });
  }

  delete(id:string){
    const ok=confirm("Are you sure want to delete?");
    if(ok)
    {
      this.userService.deleteUser(id).subscribe((result)=>{
        alert("user deleted successfully");
        this.users=this.users.filter((u)=>u._id!=id);
      });
    }
  }
}
