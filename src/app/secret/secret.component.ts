import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {
  secretText="Secret password='bla-bla-bla'";
  secrets=[];
  count=0;

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
      this.count=this.secrets.length+1;
      this.secrets.push({'id':this.count, 'text': new Date()});
   }

}
