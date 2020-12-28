export class Todo {

    static fromJson({
        id,
        tarea,
        completado,
        creado
    }) {
        const tempTodo = new Todo(tarea);

        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
    }

    constructor(tarea) {

        this.tarea = tarea; // Se le asigna el nombre de la tarea
        this.id = new Date().getTime(); // obtener fecha para crear un ID único
        this.completado = false; // 
        this.creado = new Date();
    }
}