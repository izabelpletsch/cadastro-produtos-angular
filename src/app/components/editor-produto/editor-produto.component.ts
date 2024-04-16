import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Produto } from '../../services/produto';
import { ProdutoService } from '../../services/produto.service';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-editor-produto',
  templateUrl: './editor-produto.component.html',
  styleUrl: './editor-produto.component.scss'
})
export class EditorProdutoComponent implements OnInit {
  produtos: Produto[] = [];
  formProduto: FormGroup;
  isEditing: boolean = false;
  submitted: boolean = false;

  ngOnInit(): void {
    this.loadProdutos();
  }

  constructor(
    private formBuilder: FormBuilder,
    private service: ProdutoService,
    private confirmationDialogService: ConfirmationDialogService,
  ) {
    this.formProduto = formBuilder.group({
      codigoBarras: ['', Validators.required],
      nomeProduto: [''],
      marcaProduto: [''],
      qtdProduto: [''],
      fornecedorProduto: [''],
      precoProduto: ['', Validators.required],
    });
  }

  loadProdutos() {
    this.service.getProdutos().subscribe({
      next: (data) => (this.produtos = data),
    })
  }

  onSubmit() {
    this.submitted = true;

    if (this.formProduto.valid) {
      if (this.isEditing) {
        this.service.updateProdutos(this.formProduto.value).subscribe({
          next: () => {
            this.loadProdutos();
            this.isEditing = false;
            this.submitted = false;
          }
        })
      } else {
        this.service.postProdutos(this.formProduto.value).subscribe({
          next: (data) => { 
            this.produtos.push(data); 
            this.submitted = false;
          }
        })
      }

      this.formProduto.reset();
    }
  };

  delete(produto: Produto) {
    this.confirmationDialogService.confirm('Deletar produto', 'Você tem certeza de que quer deletar o produto?')
    .then((confirmed) => {
      if (confirmed) {
        this.service.deleteProdutos(produto).subscribe({
          next: () => this.loadProdutos(),
        });
      }
    })
  }

  edit(produto: Produto) {
    this.formProduto.setValue(produto);
    this.isEditing = true;
  }

  get codigoBarras(): any {
    return this.formProduto.get("codigoBarras");
  }

  get precoProduto(): any {
    return this.formProduto.get("precoProduto");
  }

  //FONTAWESOME
  faPencil = faPencil;
  faTrashCan = faTrashCan;
}
