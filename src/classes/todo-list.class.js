export class TodoList {

    constructor() {

        this.todos = []; //Generaramos un array vacio

    }

    nuevoTodo(todo) {

        this.todos.push(todo); //Agrega una tarea al array todos
    }

    eliminarTodo(id) {

        this.todos = this.todos.filter(todo => todo.id != id);

    }

    marcaCompletado(id) {

        for (const todo of this.todos) {

            if (todo.id == id) {
                todo.complentado = !todo.complentado;
                break;
            }
        }

    }

    eliminarCompletado() {

    }
}