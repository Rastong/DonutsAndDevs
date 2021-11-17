import { Component, OnInit } from '@angular/core';
import { DonutsService } from '../donuts.service';
import { IDonut } from '../idonut';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {

  donutList:IDonut[] = [];

  constructor(private donutservice:DonutsService) { }

  ngOnInit(): void {
    this.donutList = this.donutservice.getDonuts()
  }
}
