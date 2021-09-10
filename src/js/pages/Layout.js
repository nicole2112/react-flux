import React from "react";
import {Link} from "react-router";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

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
        this.props.history.replaceState(null, "/");
    }

    render() {
        const {location} = this.props;
        const containerStyle = {
            marginTop: "60px"
        };


        return (
           /* <div>
                <Header changeTitle = {this.changeTitle.bind(this)} title={this.state.title}/>
                <Footer />
            </div>*/
            <div>
                <Nav location={location}></Nav>
                <div class="container" style={containerStyle}>
                    <div class="row">
                        <div class="col-lg-12">
                            <h1>React Flux Example</h1>
                            {this.props.children}
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </div>    
        );
    }
}