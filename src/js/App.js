import React, { Component } from "react";
// import ReactPageScroller from "react-page-scroller";
import InViewMonitor from "react-inview-monitor";

import "../css/App.css";

import Loader from "./Loader";
import NavBar from "./NavBar";
import Homepage from "./Homepage";
import About from "./About";
import Work from "./Work";

class App extends Component {
    state = {
        loading: true,
        siteReady: false,
        view: {
            homepage: true,
            about: false,
            work: false
        },
        sectionsLoaded: {
            homepage: false,
            about: false,
            work: false
        }
    };

    loadingDone = () => {
        this.setState({
            loading: false
        });
    };

    siteIsReady = () => {
        this.setState({
            siteReady: true
        });
    };

    showAbout = () => {
        this.setState({
            view: {
                homepage: false,
                about: true,
                work: false
            }
        });
    };

    showWork = () => {
        this.setState({
            view: {
                homepage: false,
                about: false,
                work: true
            }
        });
    };

    render() {
        document.body.className = this.state.loading ? "loading" : "";
        return (
            <div className="App">
                <NavBar
                    showAbout={this.showAbout}
                    showWork={this.showWork}
                    view={this.state.view}
                />
                {this.state.loading && (
                    <Loader
                        loadingDone={this.loadingDone}
                        siteReady={this.state.siteReady}
                    />
                )}
                <Homepage
                    loading={!this.state.loading}
                    siteIsReady={this.siteIsReady}
                />
                <InViewMonitor
                    classNameInView="in-view"
                    toggleClassNameOnInView={true}
                >
                    <About />
                </InViewMonitor>
                <Work />
                {/* 
                {this.state.view.homepage && (
                    <Homepage
                        loading={!this.state.loading}
                        siteIsReady={this.siteIsReady}
                    />
                )}
                {this.state.view.about && <About />}
                {this.state.view.work && <Work />} */}
            </div>
        );
    }
}

export default App;
