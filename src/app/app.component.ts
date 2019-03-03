import { Component } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isActive: boolean;
  isPricesModalActive: boolean;
  private isNewToSite = "isNewToSite";

  constructor(
    db: AngularFirestore
  ) {}

  ngOnInit(): void {
    if (!localStorage.getItem(this.isNewToSite)) {
      localStorage.setItem(this.isNewToSite, 'Value');

      setTimeout(() => {
        this.isActive = true;
      }, 1000);
    }
  }
}
