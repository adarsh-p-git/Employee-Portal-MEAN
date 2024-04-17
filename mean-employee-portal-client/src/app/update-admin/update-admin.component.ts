import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit{
adminDetails:any={}
editAdminStatus:boolean=false




  
profilePicture:string="https://th.bing.com/th/id/OIP.25iSkbJTm4F-Rq0g1JR8NgHaHa?rs=1&pid=ImgDetMain"

constructor(private adminAPI:AdminService){}

ngOnInit(): void {
  this.adminAPI.getAdminDetails().subscribe((res:any)=>{
    this.adminDetails=res
    if(res.profilePicture)
      {
        this.profilePicture=res.profilePicture
      }
  })
}




editAdminBtn()
{
  this.editAdminStatus=true
}
}
