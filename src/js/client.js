import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
    constructor(){
        super();
        this.name = "Will";
    }

    render() {
        return (
            <h1>It's working, {this.name}!</h1>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);