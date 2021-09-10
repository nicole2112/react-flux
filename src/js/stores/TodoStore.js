import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter{

  constructor(){
    super()
    this.todos = [
      {
        id: 113464613,
        text: "Go shopping",
        complete: false
      },
      {
        id: 235684679,
        text: "Pay water bill ",
        complete: false
      },
    ];
  }

  createTodo(text) {
    const id = Date.now();

    this.todos.push({
      id,
      text,
      complete: false,
    });

    this.emit("change");
  }

  receiveTodo(_todos) {
      this.todos = _todos;
      this.emit("change");
  }

  getAll(){
    return this.todos;
  }

  //Para el dispatcher:
  handleActions(action)
  {
    switch(action.type){
      case "CREATE_TODO":{
        this.createTodo(action.text);
      }
      case "RECEIVE_TODOS":{
        this.receiveTodo(action.todos);
      }
    }
  }
}

const todoStore = new TodoStore;

dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;
window.todoStore = todoStore;
export default todoStore;