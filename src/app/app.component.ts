import { Component } from '@angular/core';
import { User } from  './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shipwrecked!';
  users: User[] = [
    new User("Jahan", true, true, 3, false, 0)
  ];
}
