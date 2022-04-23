import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  Title : string ="Unit Test Demo " ;
  Description :String ="Unit Test Works in Test Component Class"

  constructor() { }

  ngOnInit(): void {
  }

}
