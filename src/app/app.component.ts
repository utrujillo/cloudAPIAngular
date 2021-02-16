import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cloudAPI';
  altoSection: any;

  ngOnInit(): void {
    let hSection = window.innerHeight - 96;
    this.altoSection = {
      "min-height": `${hSection}px`
    }
  }
}
