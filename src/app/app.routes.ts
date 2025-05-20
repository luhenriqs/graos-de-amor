import { Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SobreComponent } from './sobre/sobre.component';
import { CardapioComponent } from './cardapio/cardapio.component';


export const routes: Routes = [
  
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cardapio', component: CardapioComponent },
  { path: 'sobre', component: SobreComponent },
  { path: '**', redirectTo: '' }
];
