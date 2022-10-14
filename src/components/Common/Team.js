import React, {Component} from "react";
import TeamMember from "./TeamMember";
import tm1 from "../assets/img/team/1.jpg";
import tm2 from "../assets/img/team/2.jpg";
import tm3 from "../assets/img/team/3.jpg";


const team = [
    {name:'Parveen Anand',title:'Lead Designer', image:tm1},
    {name:'Diana Petersen',title:'Lead Marketer', image:tm2},
    {name:'Larry Parker',title:'Lead Developer', image:tm3},
]

class Team extends Component{

    render(){
        return(
            <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                   
                   {
                    team.map((item,index) => {
                        return <TeamMember {...item} key={index} />
                    })
                   }
                </div>
                <div className="row">
                <div className="col-lg-8 mx-auto text-center">
                    <p className="large text-muted"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde. </p>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default Team;