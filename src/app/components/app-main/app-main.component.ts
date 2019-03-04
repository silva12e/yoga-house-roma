import { Component } from "@angular/core";

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.scss']
})
export class MainComponent {
  isActive: boolean;
  private isNewToSite = "isNewToSite";
  
  ngOnInit(): void {
    if (!localStorage.getItem(this.isNewToSite)) {
      localStorage.setItem(this.isNewToSite, 'Value');

      setTimeout(() => {
        this.isActive = true;
      }, 1000);
    }
  }
}
