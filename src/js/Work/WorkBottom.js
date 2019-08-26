import React, { Component } from "react";
import InViewMonitor from "react-inview-monitor";

function ContentBar() {
    return (
        <div className="content-bar">
            <div className="content-bar-dot" />
            <div className="content-bar-dot" />
            <div className="content-bar-dot" />
        </div>
    );
}

function ContentControl({ id, text, size, active, handleClick }) {
    return (
        <InViewMonitor
            classNameInView="in-view"
            toggleClassNameOnInView={true}
            intoViewMargin={"0px"}
        >
            <div
                className={`content-control${active ? " highlight" : ""}`}
                onClick={() => handleClick(size, id)}
            >
                {text}
            </div>
        </InViewMonitor>
    );
}

class ContentSize extends Component {
    constructor() {
        super();
        this.state = {
            activeControl: 1,
            controls: [
                { id: 1, text: "Desktop", size: "100%", active: true },
                { id: 2, text: "Tablet", size: "1000px", active: false },
                { id: 3, text: "Mobile", size: "375px", active: false }
            ]
        };
    }

    handleClick = (size, id) => {
        this.setState(prevState => {
            prevState.controls.map(control => {
                if (control.active) {
                    control.active = false;
                }
                if (control.id === id) {
                    control.active = true;
                }
                return control;
            });
        });
        this.props.updateContentSize(size);
    };

    render() {
        const controls = this.state.controls.map(control => (
            <ContentControl
                key={control.id}
                id={control.id}
                text={control.text}
                size={control.size}
                active={control.active}
                handleClick={this.handleClick}
            />
        ));
        return <div className="content-controls">{controls}</div>;
    }
}

class WorkBottom extends Component {
    constructor() {
        super();
        this.state = {
            viewSize: "100%"
        };
    }

    updateContentSize = newSize => {
        this.setState({
            viewSize: newSize
        });
    };

    render() {
        const { title, content } = this.props;
        return (
            <div className="work-item-bottom">
                <div className="work-area">
                    <div
                        className="content"
                        style={{ width: this.state.viewSize }}
                    >
                        <ContentBar />
                        <iframe className="frame" title={title} src={content} />
                    </div>
                    <ContentSize updateContentSize={this.updateContentSize} />
                </div>
            </div>
        );
    }
}

export default WorkBottom;
