import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grãos-de-amor';

  constructor(private router: Router) {}

  navegarPara(caminho: string) {
    this.router.navigate([caminho]);
  }
}
