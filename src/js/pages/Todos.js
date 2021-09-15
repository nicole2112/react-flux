import React from "react";
import todoStore from "../stores/TodoStore";
import * as TodoActions from "../actions/TodoAction";
import Todo from "../components/Todo";

/*import Header from "../components/Header";
import Footer from "../components/Footer";*/


export default class Featured extends React.Component {
    constructor(){
        super();
        this.getTodos = this.getTodos.bind(this);
        this.state={
            todos: todoStore.getAll(),
        }
    }

    //Se utiliza sólo la primera vez que se renderiza el componente
    componentWillMount(){
        todoStore.on("change", this.getTodos);
        // console.log("count ", todoStore.listenerCount("change"));
    }

    //Para prevenir memory leaks
    componentWillUnmount(){
        todoStore.removeListener("change", this.getTodos);
    }

    getTodos(){
        console.log("change");
        this.setState({
            todos: todoStore.getAll(),
        });
    }

    reloadTodos(){
        TodoActions.reloadTodos(Date.now());
    }

    render() {
        const {todos} = this.state;
        const TodoComponents = todos.map((todo) =>
        {
            return <Todo key={todo.id} {...todo}/>;
        });

        return (
            <div>
                <button onClick={this.reloadTodos.bind(this)} className="btn btn-primary">Reload</button>
                <div class="row">
                    <h1>Todos</h1>
                    {TodoComponents}
                </div>
            </div>
        );
    }
}