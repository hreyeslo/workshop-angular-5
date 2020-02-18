import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../auth.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  user: User = {};

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.user = this._route.snapshot.data || {};
  }

}