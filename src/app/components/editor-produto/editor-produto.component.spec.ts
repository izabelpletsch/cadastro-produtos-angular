import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorProdutoComponent } from './editor-produto.component';

describe('EditorProdutoComponent', () => {
  let component: EditorProdutoComponent;
  let fixture: ComponentFixture<EditorProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditorProdutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditorProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
