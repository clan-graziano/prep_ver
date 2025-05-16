import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pren } from './models/forum.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'medico';
  vetprenotazioni: Pren[] = []
salva(){

}
}
