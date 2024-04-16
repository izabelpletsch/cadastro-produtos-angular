import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { EditorProdutoComponent } from './components/editor-produto/editor-produto.component';
import { EditorFornecedorComponent } from './components/editor-fornecedor/editor-fornecedor.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './components/confirmation-dialog/confirmation-dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    EditorProdutoComponent,
    SidebarComponent,
    EditorFornecedorComponent,
    InicioComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    provideClientHydration(),
    ConfirmationDialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
