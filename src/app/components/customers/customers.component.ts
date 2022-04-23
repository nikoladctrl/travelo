import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  items: Comment[] = [
    { text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utricies mi eget mauris pharetra. Amet risus nullam eget felis eget nunc lobortis. Purus in massa tempor nec. Porta nibh venenatis cras sed.', poster: 'Shalini Singh', position: 'Project Manager flyhigh' },
    { text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utricies mi eget mauris pharetra. Amet risus nullam eget felis eget nunc lobortis. Purus in massa tempor nec. Porta nibh venenatis cras sed.', poster: 'Shalini Singh', position: 'Project Manager flyhigh' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
