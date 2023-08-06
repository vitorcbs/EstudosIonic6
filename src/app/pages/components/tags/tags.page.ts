import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.page.html',
  styleUrls: ['./tags.page.scss'],
})
export class TagsPage implements OnInit {
  public progress = 0;
  public buffer = 0.06
  constructor() {
    setInterval(() => {
      this.progress += 0.06;
      this.buffer += 0.06

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress > 1) {
        setTimeout(() => {
          this.buffer = 0.06
          this.progress = 0;
        }, 1000);
      }
    }, 1000);
  }

  ngOnInit() {
  }

}
