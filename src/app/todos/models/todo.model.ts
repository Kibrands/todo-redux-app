export class Todo {
    public id: number;
    public completado: boolean;

    constructor(public texto: string) {
        this.id = Math.random() * Math.random()
        this.completado = false
    }
}