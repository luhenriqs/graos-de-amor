import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CarrinhoService {
  private itens: any[] = [];

  obterItens() {
    return this.itens;
  }
  
  adicionarItem(item: any) {
    this.itens.push(item);
  }
  
  limparCarrinho() {
    this.itens = [];
  }
  
  atualizarItens(novosItens: any[]) {
    this.itens = novosItens;
  }
}
