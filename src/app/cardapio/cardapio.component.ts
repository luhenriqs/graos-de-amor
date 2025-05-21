import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-cardapio',
  standalone: true, // 
  imports: [CommonModule], // 
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent {
  produtos = [
    { nome: 'Café Expresso', descricao: 'Café puro e intenso.', preco: 5.00, imagem: 'assets/Cardapio.jpeg' },
    { nome: 'Café com Leite', descricao: 'Mistura suave e cremosa.', preco: 6.50, imagem: 'assets/Cardapio.jpeg' },
    { nome: 'Café Gelado', descricao: 'Refrescante para os dias quentes.', preco: 7.00, imagem: 'assets/Cardapio.jpeg' }
  ];
}


export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
}

export const CARDAPIO: Produto[] = [
  {
    id: 1,
    nome: 'Café Expresso',
    descricao: 'Café forte e concentrado, servido em dose pequena.',
    preco: 5.00,
    imagem: 'assets/expresso.jpg',
  },
  {
    id: 2,
    nome: 'Cappuccino',
    descricao: 'Mistura cremosa de café, leite vaporizado e espuma de leite.',
    preco: 7.50,
    imagem: 'assets/cappuccino.jpg',
  },
  {
    id: 3,
    nome: 'Mocha',
    descricao: 'Café com leite, chocolate e chantilly por cima.',
    preco: 8.00,
    imagem: 'assets/mocha.jpg',
  },
  {
    id: 4,
    nome: 'Latte',
    descricao: 'Café suave com bastante leite vaporizado.',
    preco: 6.50,
    imagem: 'assets/latte.jpg',
  },
  {
    id: 5,
    nome: 'Café Gelado',
    descricao: 'Refrescante bebida de café com gelo e toque de baunilha.',
    preco: 7.00,
    imagem: 'assets/icedcoffee.jpg',
  }
];
