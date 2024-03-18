import React, { Component } from "react";
import Navbar from "./components/navbar";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Benefit from "./components/Benefit";
import Client from "./components/Client";
import Works from "./components/itsworks";
import CaseStudy from "./components/CaseStudy";
import Clients from "./components/clients";
import Contact from "./components/Contact";
import Footer from "./components/footer";
class App extends Component {
    state = {};
    render() {
        return (
            <div>
                <Navbar/>
                <Banner/>
                <Features/>
                <Benefit/>
                <Client/>
                <Works/>
                <CaseStudy/>
                <Clients/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}
export default App;
{/* <Banner/>
                <Features/>
                <Benefit/>
                <Client/>
                <Works/>
                <CaseStudy/>
                <Clients/>
                <Contact/>
                <Footer/> */}