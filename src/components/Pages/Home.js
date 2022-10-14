import React, {Component} from "react";
import Header from "../Common/Header";
import image from "../assets/img/header-bg.jpg";

// re-usable components
import Services from "../Common/Services";
import Portfolio from "../Common/Portfolio";
import Contact from './Contact';
import About from "./AboutUs";
import Clients from "../Common/Clients";

class Home extends Component {
    render(){
        return(
        <div>
            <Header
            title="Welcome to Our Studio!"
            subtitle="IT'S IS NICE TO MEET YOU"
            buttonText="Tell Me More AMigo!"
            link="/services"
            showButton={true}
            image={image}
            />
            <Services />
            <Portfolio />
            <About />
            <Clients />
            <Contact />
         </div>
        )
    }
}

export default Home;