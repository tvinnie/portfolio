import React, {Component} from "react";
import Timeline from "../Common/Timeline";

class About extends Component{
    render(){
        return(
            <div>

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