import './styles.css';

import {
    Todo,
    TodoList
} from './classes';

import {
    crearHtmlTodo
} from './js/componentes';




export const todoList = new TodoList();

todoList.todos.forEach(todo => crearHtmlTodo(todo));