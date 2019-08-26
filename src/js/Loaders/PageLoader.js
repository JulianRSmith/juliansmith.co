import React, { Component } from "react";
import "../../css/PageLoader.css";

class PageLoader extends Component {
    render() {
        const { text } = this.props;
        return (
            <div className="page-loader">
                <span className="page-loader-txt">{text}</span>
            </div>
        );
    }
}

export default PageLoader;
