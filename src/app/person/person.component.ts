import { Component, OnInit } from '@angular/core';
import { DevsService } from '../devs.service';
import { IPeople } from '../ipeople';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  peopleList:IPeople[] = [];

  constructor(private personservice:DevsService) { }

  ngOnInit(): void {
    this.peopleList = this.personservice.getPerson();
  }
  
}
