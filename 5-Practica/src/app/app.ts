import { Component } from '@angular/core';
import { BlogComponent } from "./components/blog/blog.component";

@Component({
  selector: 'app-root',
  imports: [BlogComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = '5-Practica';
}
