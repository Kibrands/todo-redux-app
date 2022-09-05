import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Todo } from '../../models/todo.model';
import { modificar, toggle, borrar } from '../../todo.actions';
import { AppState } from '../../../app.reducer';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo
  @ViewChild('inputFisico') inputFisico!: ElementRef;

  chkCompletado!: FormControl;
  txtInput!: FormControl;

  editando: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado)
    this.txtInput = new FormControl(this.todo.texto, Validators.required)
    this.chkCompletado.valueChanges.subscribe(value => this.store.dispatch(toggle({id: this.todo.id})))
  }

  editar() {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto)

    setTimeout(() => this.inputFisico.nativeElement.focus(), 1)
  }

  terminarEdicion() {
    this.editando = false;
    if(this.txtInput.invalid || this.txtInput.value === this.todo.texto) {
      return
    }
    this.store.dispatch(modificar({id: this.todo.id, texto: this.txtInput.value}))
  }

  borrar() {
    this.store.dispatch(borrar({id: this.todo.id}))
  }

}
