export class Todo {

    constructor(tarea) {

        this.tarea = tarea; // Se le asigna el nombre de la tarea
        this.id = new Date().getTime(); // obtener fecha para crear un ID único
        this.completado = false; // 
        this.creado = new Date();
    }
}