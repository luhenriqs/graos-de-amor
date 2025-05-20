import { Routes } from '@angular/router';
<<<<<<< HEAD
import { CadastroComponent } from './cadastro/cadastro.component';
import { SobreComponent } from './sobre/sobre.component';
import { CardapioComponent } from './cardapio/cardapio.component';


export const routes: Routes = [
  
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cardapio', component: CardapioComponent },
  { path: 'sobre', component: SobreComponent },
  { path: '**', redirectTo: '' }
=======
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cardapio', component: CardapioComponent },
  { path: 'sobre-nos', component: SobreNosComponent },
>>>>>>> e48320c739815a3dacc8aab3dc42f5ac4f4fc015
];
