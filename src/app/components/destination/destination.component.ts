import { Destination } from '../../models/destination.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  @Input() destination: Destination;

  options: string[] = ['hotel', 'breakfast', 'plane'];

  constructor() { }

  ngOnInit(): void {
  }

}
