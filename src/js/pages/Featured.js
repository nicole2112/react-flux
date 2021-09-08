import React from "react";
import Article from "../components/Article";

/*import Header from "../components/Header";
import Footer from "../components/Footer";*/

export default class Featured extends React.Component {
    render() {
        const Articles = [
            "Article 1",
            "Article 2",
            "Article 3"
        ].map((title, i) => <Article key={i} title={title}></Article>);

        return (
            <div>
                <div class="row">
                    {Articles}
                </div>
            </div>
        );
    }
}