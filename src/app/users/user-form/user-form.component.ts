import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import User from '../../types/user';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  formBuilder=inject(FormBuilder);
  userForm : FormGroup=this.formBuilder.group({
    firstName:['',[Validators.required]],
    lastName:['',[Validators.required]],
    gender:['',[Validators.required]],
    age:['',[Validators.required]],
    mob_num:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]]
  });

  userService=inject(UserService);
  router=inject(Router);
  route=inject(ActivatedRoute);
  editUserId!:string;
  ngOnInit(){
    this.editUserId=this.route.snapshot.params["id"];
    if(this.editUserId)
    {
      this.userService.getUser(this.editUserId).subscribe((result)=>{
        this.userForm.patchValue(result);
      });
    }
  }


  addUser(){
    if(this.userForm.invalid)
    {
      alert("Please provide all the details");
      return;
    }

    const model: User=this.userForm.value;
    this.userService.addUser(model).subscribe(result=>{
        alert("User Added Successfully");
        this.router.navigateByUrl("/")
    })
    console.log("printing the form data",this.userForm.value);
  }


  updateUser(){

    if(this.userForm.invalid)
      {
        alert("Please provide all the details");
        return;
      }

      const model: User=this.userForm.value;
      this.userService.updateUser(this.editUserId,model).subscribe(result=>{
          alert("User updated Successfully");
          this.router.navigateByUrl("/")
      })    
  }
}
