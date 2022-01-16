import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-dev-section',
  templateUrl: './game-dev-section.component.html',
  styleUrls: ['./game-dev-section.component.scss']
})
export class GameDevSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  //game dev projects
  gameProj = [
    {title: 'Platform Hustle',img: '../../../assets/images/PlatformHustleImg.png',  descBefore: 'A fun platformer game made with C# and the Unity Game Engine. Play', descAfter: 'on desktop or laptop.', route:'/platform-hustle' , gaValue:'platformHustleLink' },
    {title: 'Space Shooter',img: '../../../assets/images/SpaceShooterImg.png',  descBefore:'This is a 2D Space Shooter game, my first game created in Unity.  Built in C# and Unity Game Engine. Play' , descAfter:'on desktop or laptop.' , route: '/space-shooter', gaValue:'spaceShooterLink' },
    {title: 'The Great Fleece',img: '../../../assets/images/GreatFleeceImg.png',  descBefore: 'A fun 3D sleuth game created with Unity 3D, C#, and Cinemachine. Play', descAfter: 'on desktop or laptop.', route: '/the-great-fleece', gaValue: 'theGreatFleeceLink'},
    {title: 'Dungeon Escape',img: '../../../assets/images/DungeonImg.png'}
  ]

}
