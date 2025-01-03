import { Component, OnInit } from '@angular/core';
import {ContactUsService} from '../../service/contact-us.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  constructor(private contactUsService:ContactUsService) { }

  ngOnInit(): void {
  }
savemessage(name,email,subject,message){
    if(name.length ===0 || email.length ===0 || message.length ===0 || subject.length ===0){
      return;
    }
    this.contactUsService.saveMessage(name,email,subject,message).subscribe(data=>data)
}

}
