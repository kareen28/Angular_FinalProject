import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  text="dark";
  style="bright";

  flag:boolean=true;
  change_color(){
    if(this.flag){
      this.style="black";
      this.text="bright";
    }
    else{
      this.style="white";
      this.text="dark";
    }
    this.flag=!this.flag;
  
    }

  
  
  name1='kareen barkat';
  name2='amal haj';
  name3='amal abudeab';

  imgUrl='/assets/user.jpg';
  imgUrl2='/assets/user.jpg';
  imgUrl3='/assets/user.jpg';

  id1=12345;
  id2=12345;
  id3=12345;

}
