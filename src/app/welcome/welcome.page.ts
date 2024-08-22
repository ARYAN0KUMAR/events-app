import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss']
})
export class WelcomePage implements OnInit {

  onboardingScreens = [
    {image:'1.jpg'},
    {image:'2.jpg'},
    {image:'3.jpg'}
  ];
  swiperModules = [IonicSlides];

  constructor() { }

  ngOnInit() {
  }

}
