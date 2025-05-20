import { Component } from '@angular/core';
<<<<<<< HEAD
import { Router, RouterOutlet } from '@angular/router';
=======
import { RouterOutlet } from '@angular/router';
>>>>>>> e48320c739815a3dacc8aab3dc42f5ac4f4fc015

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grãos-de-amor';
<<<<<<< HEAD

  constructor(private router: Router) {}

  navegarPara(caminho: string) {
    this.router.navigate([caminho]);
  }
=======
>>>>>>> e48320c739815a3dacc8aab3dc42f5ac4f4fc015
}
