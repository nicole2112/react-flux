import dispatcher from "../dispatcher";

export function createTodo(text){
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text,
    });
}

export function deleteTodo(id){
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id,
    });
}

export function reloadTodos() {
    //console.log(this.todos);
    // dispatcher.dispatch({type: "FETCH_TODOS"});
    
    setTimeout(() => {
      dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
        {
          id: 8484848484,
          text: "Go Shopping Again",
          complete: false
        },
        {
          id: 6262627272,
          text: "Finish class project",
          complete: true
        },
      ]});
    }, 1000);
}