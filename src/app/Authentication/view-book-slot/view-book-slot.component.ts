import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthserviceService } from 'src/app/Services/authservice.service';
import Swal from 'sweetalert2';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-view-book-slot',
  templateUrl: './view-book-slot.component.html',
  styleUrls: ['./view-book-slot.component.css']
})
export class ViewBookSlotComponent implements OnInit {
  bookSlot={
    email:'',
    date:'',
    time:''
  }
  useremail={
    email:this.authservice.getemail()
  }
  name = new FormControl('',[Validators.required]);
  email = new FormControl('',[Validators.required,Validators.email]);
  date = new FormControl('',[Validators.required]);
  time = new FormControl('',[Validators.required]);
  
  

  constructor(private authservice: AuthserviceService, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  onBookAppointment(){
    if(this.name.hasError('required') || this.email.hasError('required') || 
    this.email.hasError('email') || this.date.hasError('required') || 
    this.time.hasError('required') ){
      this.snack.open('Invalid Details, Please Enter Valid Details','',{
        duration: 3000,
      })

    }
    else{
     this.authservice.bookNewSlot(this.bookSlot).subscribe(
      (data)=>
      {
        console.log(data);
        Swal.fire('success','Appointment Registered','success');
      },
      (error)=>{
        this.snack.open('Database Error!!!','',{
          duration:3000,
        });
      }
      )
    }
  }
}