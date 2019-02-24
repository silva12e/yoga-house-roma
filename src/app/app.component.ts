import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isActive: boolean;
  private isNewToSite = "isNewToSite";

  constructor() { }

  ngOnInit(): void {
    if (!localStorage.getItem(this.isNewToSite)) {
      localStorage.setItem(this.isNewToSite, 'Value');

      setTimeout(() => {
        this.isActive = true;
      }, 1000);
    }
  }
}
