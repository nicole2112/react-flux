import React from "react";

export default class Archives extends React.Component {
    render() {
        //this.props.params.article:
        const {params} = this.props;
        const {article} = params;

        const {query} = this.props.location;
        const {date, filter} = query;
        
        return (
            <h1>Archives {article}</h1>
        );
    }
}