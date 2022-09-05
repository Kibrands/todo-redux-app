import { createAction, props } from '@ngrx/store';

export const crear = createAction(
    '[TODO] Crear',
    props<{texto:string}>()
);

export const toggle = createAction(
    '[TODO] Toggle Todo',
    props<{id: number}>()
)

export const modificar = createAction(
    '[TODO] Modificar',
    props<{id: number,texto: string}>()
)

export const borrar = createAction(
    '[TODO] Borrar Todo',
    props<{id: number}>()
)

export const toggleAll = createAction(
    '[TODO] Toggle All Todos',
    props<{completado: boolean}>()
)

export const limpiarCompletados = createAction(
    '[TODO] Limpiar Completados'
);