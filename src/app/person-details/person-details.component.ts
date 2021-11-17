import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DevsService } from '../devs.service';
import { IPeople } from '../ipeople';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  person:IPeople = {} as IPeople;
  constructor(private route:ActivatedRoute, private personservice: DevsService) { }

  ngOnInit(firstName:string): void {
    const routeParams = this.route.snapshot.paramMap;
    let name:string = routeParams.get("name");
    
    this.person = this.personservice.getPerson();
  }
}
