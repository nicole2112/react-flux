import React from "react";

export default class Article extends React.Component {
    render(){
        const {title} = this.props;

        return (
            <div class="col-md-4">
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet</p>
                <a class="btn btn-default">More Info</a>
            </div>
        );
    }
}