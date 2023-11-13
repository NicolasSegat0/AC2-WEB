import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Apólice de Seguro';
  nome: string="";
  sexo: string="";
  idade: number=0;
  valor: number=0;
  apolice=0;
  dadosValidos = false;

  calcular(){
    if (!this.sexo || !this.idade || !this.valor){
      this.dadosValidos = false;  
      this.apolice = 0;
    } else {
      this.dadosValidos = true;
      if (this.sexo == 'masculino') {
        if (this.idade <= 25) {
          this.apolice = this.valor * 0.15;
        } else {
          this.apolice = this.valor * 0.10;
        }}
       else {
        this.apolice = this.valor * 0.08;
      }
    }
    }

}
