import { createReducer, on } from '@ngrx/store';

import { crear, modificar, toggle, borrar, toggleAll, limpiarCompletados } from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Comprar traje de Ironman'),
    new Todo('Robar escudo del Capitán América'),
];

export const todoReducer = createReducer<Todo[]>(
    estadoInicial,
    on(crear, (state, { texto }) => [...state, new Todo(texto)]),
    on(toggle, (state, { id }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completado: !todo.completado
                }
            }
            return {...todo}
        })
    }),
    on(modificar, (state, {id, texto}) => {
        return state.map(todo => {
            if(todo.id === id) {
                return {
                    ...todo,
                    texto: texto
                }
            }
            return {...todo}
        })
    }),
    on(borrar, (state, {id}) => [...state.filter(todo => todo.id !== id)]),
    on(toggleAll, (state,{completado}) => state.map(todo => {
        return {
            ...todo,
            completado: completado
        }
    })),
    on(limpiarCompletados, (state) => [...state.filter(({completado}) => !completado)])
);