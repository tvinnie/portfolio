import React, {Component} from "react";
import Header from "../Common/Header";
import Timeline from "../Common/Timeline";
import about from "../assets/img/another.png";

class About extends Component{
    render(){
        return(
            <div>
                <Header
                title="About Us"
                subtitle="It's really a great story"
                showButton={false}
                image={about}
                />

        <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
               <Timeline />
            </div>
        </section>


            </div>
            
        )
    }
}

export default About;