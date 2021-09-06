import React from "react";
import {Link} from "react-router";
/*import Header from "../components/Header";
import Footer from "../components/Footer";*/

export default class Layout extends React.Component {
    /*constructor(){
        super();
        this.state = {
            title: "Welcome"
        };
    }

    changeTitle(title) {
        this.setState({title})
    }

*/

    navigate(){
        this.props.history.pushState(null, "/");
    }


    render() {
        /*
        setTimeout(() => {
            this.setState({title: "Welcome Will!"});
        }, 2000);
        */
        return (
           /* <div>
                <Header changeTitle = {this.changeTitle.bind(this)} title={this.state.title}/>
                <Footer />
            </div>*/
            <div>
                <h1>KillerNews.net</h1>
                {this.props.children}
                <Link to="archives" class ="btn btn-danger">archives</Link>
                <Link to="settings"><button class ="btn btn-success">settings</button></Link>
                <button onClick={this.navigate.bind(this)}>featured</button>
            </div>
            
        );
    }
}