import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  personal = ["Hi, I'm Vipul Bavaliya and I major in B.Tech computer engineering.",
    "I am from Lakhapar.", "currently I am doing my Bachelor in Rajkot at RK University.",
    "I perceive myself as confident and hardworking.",
    "I've built various types of frontend projects like Book-e-cell."]

  constructor() { }

  ngOnInit(): void {
  }

}
