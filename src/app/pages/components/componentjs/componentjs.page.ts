import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentjs',
  templateUrl: './componentjs.page.html',
  styleUrls: ['./componentjs.page.scss'],
})
export class ComponentjsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  atualizar(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
}
