import React from "react";
import InViewMonitor from "react-inview-monitor";

function WorkTop({ title, text, techs }) {
    const tech = techs.map(
        (tech, i) => tech + (i !== techs.length - 1 ? " | " : "")
    );
    return (
        <div className="work-item-top">
            <div className="work-item-heading">
                <InViewMonitor
                    classNameInView="in-view"
                    toggleClassNameOnInView={true}
                    intoViewMargin={"0px"}
                >
                    <h3 className="highlight">{title}</h3>
                </InViewMonitor>
            </div>
            <div className="work-item-text">
                <p>{text}</p>
                <div className="work-item-tech">
                    <InViewMonitor
                        classNameInView="in-view"
                        toggleClassNameOnInView={true}
                        intoViewMargin={"0px"}
                    >
                        <span className="highlight">Technologies Used</span> :{" "}
                        {tech}
                    </InViewMonitor>
                </div>
            </div>
        </div>
    );
}

export default WorkTop;
