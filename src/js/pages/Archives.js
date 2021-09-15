import React from "react";
import * as TodoActions from "../actions/TodoAction";

export default class Archives extends React.Component {
    createTodo(e){
        e.preventDefault();
        TodoActions.createTodo(this.todoText);
    }
    render() {
        //this.props.params.article:
        // const {query} = this.props.location;
        // const {date, filter} = query;
        const {params} = this.props;
        const {article} = params;

        const {todoText} = "";

        const onTextChange = (event) => {
            this.todoText = event.target.value;
        }
        return (
            <div className="mb-3">
                <h2>Create New ToDo {article}</h2>
                <form>
                    <label className="col-sm-2 col-form-label" for="name">ToDo</label>
                    <div className="col-sm-10"><input id="name" type="text" onChange={onTextChange} value={todoText}/></div>
                    <button onClick={this.createTodo.bind(this)} className="btn btn-success">Create</button>
                </form>
            </div>
        );
    }
}