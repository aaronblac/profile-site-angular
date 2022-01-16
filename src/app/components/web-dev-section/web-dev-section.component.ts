import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-dev-section',
  templateUrl: './web-dev-section.component.html',
  styleUrls: ['./web-dev-section.component.scss']
})
export class WebDevSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }


  //web dev projects
  devProj = [
    {title: 'Tinpurr',img: '../../../assets/images/Tinpurr.png',  desc: 'A parody web page for a cat dating app. It was a project I used to expand my Bootstrap knowledge. I used HTML, CSS and Bootstrap. Link to ', linkText: 'Live Site.', route:'https://catlove.netlify.com/' , gaValue:'Tinpurr' },
    {title: 'Barefoot Life Media',img: '../../../assets/images/Barefoot.png',  desc:'This is a responsive site built with Wix for a digital media and marketing company. View ' , linkText:'Live Site.' , route: 'https://www.barefootlifemedia.com/', gaValue:'BarefootLink' },
    {title: 'Job Pixel',img: '../../../assets/images/JobPixelImg.png',  desc: 'From initial startup to MVP. I designed and coded the initial http auth Login splash page, worked on the Contact page, and integrated Google Analytics and Google Tag Manager to the site.  The app was built in React.js, Redux, HTML, CSS. ', linkText: 'View live here.', route: 'https://www.jobpixel.com/', gaValue: 'JobPixelLink'},
    {title: 'Blackverse Productions Newsletter',img: '../../../assets/images/BVNLapp.png',  desc: 'This is an app I built for a newsletter signup for a Production company. I used HTML, CSS, Node.js with express, https, and body-parser. Mailchimp API was used to store the data collected from the form. It was deployed using Hiroku. ', linkText: 'View live here.', route: 'https://salty-brushlands-39305.herokuapp.com/', gaValue: 'BlackverseLink'}

  ]


}
