import React, { Component } from "react";
import "../css/About.css";

import InViewMonitor from "react-inview-monitor";

import Image from "react-image-webp";

class About extends Component {
    state = {
        pageReady: false
    };

    getAge = () => {
        const dob = new Date(1995, 9, 7);
        const diffMs = Date.now() - dob.getTime();
        const ageDt = new Date(diffMs);
        return Math.abs(ageDt.getUTCFullYear() - 1970);
    };

    render() {
        return (
            <section id="about">
                <div className="container full">
                    <div className="content-offctr">
                        <InViewMonitor
                            classNameInView="in-view"
                            toggleClassNameOnInView={true}
                        >
                            <h2 className="highlight">About</h2>
                        </InViewMonitor>
                        <p>
                            I love making cool things on the web. Whether thats
                            a parallax scrolling website, a wacky hamburger
                            menu, or a pixel perfect animation - I love nothing
                            more then wowing people with what the web can do. As
                            such, in the long {this.getAge()} years I've spent
                            on Planet Earth, I've become well versed in all
                            things HTML, CSS, and JavaScript (ES6). I've also
                            become well trained in Sass, React, and Webpack too
                            (have a look at my work below to see). It's also not
                            just majority web based programming languages I know
                            either! When I was at University down in Brighton, I
                            was also taught Java, Python, and C++ to name a
                            small few.
                        </p>
                    </div>
                </div>
                <div className="about-picture">
                    <Image
                        src={require("../assets/me_@1.png")}
                        webp={require("../assets/me_@2.webp")}
                    />
                </div>
            </section>
        );
    }
}

export default About;
