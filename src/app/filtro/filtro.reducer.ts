import { createReducer, on } from '@ngrx/store';

import { filtrar, filtrosValidos } from './filtro.actions';

export const estadoInicial: filtrosValidos = 'todos'

export const filtroReducer = createReducer<filtrosValidos>(
    estadoInicial,
    on(filtrar, (state, { filtro }) => filtro)
);