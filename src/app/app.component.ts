import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { HomeComponent } from "../components/home/home.component";
import { FooterComponent } from "../components/footer/footer.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HomeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'recipe';
}
