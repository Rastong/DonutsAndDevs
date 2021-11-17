import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonutsService } from '../donuts.service';
import { DonutsComponent } from '../donuts/donuts.component';
import { IDonut } from '../idonut';

@Component({
  selector: 'app-donut-details',
  templateUrl: './donut-details.component.html',
  styleUrls: ['./donut-details.component.css']
})
export class DonutDetailsComponent implements OnInit {
  donut:IDonut = {} as IDonut;
  constructor(private route:ActivatedRoute, private donutservice: DonutsService) { }

  ngOnInit(name:string): void {
    const routeParams = this.route.snapshot.paramMap;
    let Name:string = routeParams.get("name");
    
    this.donut = this.donutservice.getByName(Name);
  }
}
