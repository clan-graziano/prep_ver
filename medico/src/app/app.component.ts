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
  vetprenotazioni: Pren[] = [];
  salva( nome: string, cognome: string, indirizzo: string, telefono: string, email: string, data_prenotazione: string, ora_prenotazione: string,){
    let nuovaprenotazione = new Pren(nome, cognome, telefono, email, indirizzo, data_prenotazione, ora_prenotazione);
      this.vetprenotazioni.push(nuovaprenotazione);
      console.log(this.vetprenotazioni);
  }
}
