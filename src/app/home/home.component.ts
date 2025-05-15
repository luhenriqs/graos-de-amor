import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="paddings-container">
      <div class="padding-section" routerLink="/cadastro" style="background-image: url('assets/img-cadastro.png')">
        <h2>Cadastro</h2>
      </div>
      <div class="padding-section" routerLink="/cardapio" style="background-image: url('assets/img-cardapio.png')">
        <h2>Cardápio</h2>
      </div>
      <div class="padding-section" routerLink="/sobre-nos" style="background-image: url('assets/img-sobrenos.jpeg')">
        <h2>Sobre Nós</h2>
      </div>
    </div>
  `,
})
export class HomeComponent {}
