import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menuApp = [
    { title: 'Home', url: 'home', icon: 'home'}
  ]

  public menuComponentes = [
    { title: 'Action-sheet', url: 'action-sheet', icon: 'albums' },
    { title: 'Accordion', url: 'accordion', icon: 'chevron-down' },
    { title: 'Alert', url: 'alert', icon: 'warning' },
    { title: 'Buttons', url: 'button', icon: 'dice' },
    { title: 'Card', url: 'card', icon: 'card' },
    { title: 'Componentes - JS', url: 'componentjs', icon: 'terminal' },
    { title: 'Componentes - Tags', url: 'tags', icon: 'bookmark' },
    { title: 'DateTime', url: 'datetime', icon: 'calendar' },
  ];

  public menuNatives = [
    { title: 'Camera', url: 'camera', icon: 'camera' },
  ];
  constructor() {}
}
