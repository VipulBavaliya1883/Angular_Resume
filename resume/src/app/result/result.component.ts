import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  percentage = ["90%", "80%", "70%", "60%"]

  constructor() { }

  ngOnInit(): void {
  }

}
