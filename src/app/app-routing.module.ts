import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { EditorProdutoComponent } from './components/editor-produto/editor-produto.component';
import { EditorFornecedorComponent } from './components/editor-fornecedor/editor-fornecedor.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'produtos', component: EditorProdutoComponent},
  {path: 'fornecedores', component: EditorFornecedorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
