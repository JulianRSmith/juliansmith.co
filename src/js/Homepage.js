import React, { Component } from "react";
import "../css/Homepage.css";

class Homepage extends Component {
    componentDidMount() {
        return this.props.siteIsReady();
    }
    render() {
        return (
            <div className={`homepage${this.props.loading ? " ready" : ""}`}>
                <div className="container full">
                    <div className="content-offctr">
                        <h1 className="homepage-title">
                            Hey there, my name is{" "}
                            <span className="highlight">Julian</span>! I'm a
                            creative front end{" "}
                            <span className="highlight">developer</span> and
                            double quotes lover from{" "}
                            <span className="highlight">London</span>.
                        </h1>
                    </div>
                </div>
                <div className="scroll">
                    <div className="container">
                        <span className="highlight">Scroll for more</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;
