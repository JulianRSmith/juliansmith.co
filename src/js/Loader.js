import React, { Component } from "react";
import "../css/Loader.css";

function LoaderText({ text, animate }) {
    return (
        <span className="loader-txt-feature" onAnimationEnd={animate}>
            {text}.
        </span>
    );
}

class Loader extends Component {
    state = {
        txtFinished: false
    };

    txtAnimationEnd = () => {
        if (this.props.siteReady) {
            this.setState({
                txtFinished: true
            });
        }
    };

    render() {
        const loadText = ["Devloper", "Creative", "Double Quotes Lover"];
        return (
            <div className={`loader${this.state.txtFinished ? " close" : ""}`}>
                <div className="loader-bg" />
                <div className="loader-bg" />
                <div
                    className="loader-bg"
                    onTransitionEnd={this.props.loadingDone}
                />
                <div className="loader-txt">
                    {loadText.map((text, i) => (
                        <LoaderText
                            key={i}
                            text={text}
                            animate={
                                i === loadText.length - 1 &&
                                setTimeout(this.txtAnimationEnd, 2000)
                            }
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Loader;
