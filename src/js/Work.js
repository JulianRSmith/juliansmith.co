import React, { Component } from "react";
import "../css/Work.css";
import workData from "./workData";
import InViewMonitor from "react-inview-monitor";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import WorkTop from "./Work/WorkTop";
import WorkBottom from "./Work/WorkBottom";
import Pagination from "./Work/Pagination";

function WorkItem({ work }) {
    return (
        <div className="work-item">
            <WorkTop title={work.title} text={work.text} techs={work.tech} />
            <WorkBottom title={work.title} content={work.content} />
        </div>
    );
}

class Work extends Component {
    constructor() {
        super();
        this.state = {
            index: 0
        };
        this.workTop = React.createRef();
    }

    nextWork = newIndex => {
        this.setState({
            index: newIndex
        });
        this.workTop.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };

    render() {
        const workComponents = workData.map((comp, id) => {
            return <WorkItem key={id} work={comp} />;
        });
        return (
            <section className="work">
                <div ref={this.workTop} className="container">
                    <InViewMonitor
                        classNameInView="in-view"
                        toggleClassNameOnInView={true}
                    >
                        <h2 className="highlight">Work</h2>
                    </InViewMonitor>
                    <TransitionGroup>
                        <CSSTransition
                            key={this.state.index}
                            timeout={1000}
                            unmountOnExit={true}
                        >
                            {workComponents[this.state.index]}
                        </CSSTransition>
                    </TransitionGroup>
                    <Pagination
                        index={this.state.index}
                        data={workData}
                        nextWork={this.nextWork}
                    />
                </div>
            </section>
        );
    }
}

export default Work;
