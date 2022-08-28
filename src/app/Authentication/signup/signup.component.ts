import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthserviceService } from 'src/app/Services/authservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user={
    fname:'',
    lname:'',
    age:'',
    phone_number:'',
    emailId:'',
    password:''

  };

  fname=new FormControl('',[Validators.required]);
  lname=new FormControl('',[Validators.required]);
  age=new FormControl('',[Validators.required]);
  phone_number=new FormControl('',[Validators.required, Validators.pattern('[0-9]{10,10}')]);
  email_id=new FormControl('',[Validators.required, Validators.email]);
  password=new FormControl('',[Validators.required]);
  constructor(private snack:MatSnackBar, private authservice:AuthserviceService,private router:Router
  ) { }

  ngOnInit(): void {
  }

  onformsubmit()
  {
    if(this.fname.hasError('required')||this.lname.hasError('required')||this.age.hasError('required')||this.phone_number.hasError('required')||this.phone_number.hasError('pattern')||this.email_id.hasError('required')||this.email_id.hasError('email')||this.password.hasError('required'))
    {
      this.snack.open('Invalid Details, Please Enter Valid Details','',{
        duration:3000,
      });
    }
    else
    {
      this.authservice.addNewUser(this.user).subscribe(
        (data)=>
        {
          console.log(data);
          Swal.fire('success',
            'Successfully Registered',
            'success',
          );
        },
        (error)=>
        {
          this.snack.open('Database Error!!!','',{
            duration:3000,
          });
        }
      );
      
    }
  }

}