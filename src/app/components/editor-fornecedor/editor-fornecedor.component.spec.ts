import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorFornecedorComponent } from './editor-fornecedor.component';

describe('EditorFornecedorComponent', () => {
  let component: EditorFornecedorComponent;
  let fixture: ComponentFixture<EditorFornecedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditorFornecedorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditorFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
