import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state = {
            title: "Welcome"
        };
    }

    render() {
        /*
        setTimeout(() => {
            this.setState({title: "Welcome Will!"});
        }, 2000);


        return (
            <div>
                <Header title={this.state.title}/>
                <Header title={"Other Title"}/>
                <Footer />
            </div>
        );*/
        return (
            <h1>KillerNews.net</h1>
        );
    }
}