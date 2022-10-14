import React,{Component} from "react";
import PortfolioItem from "./PortfolioItem";
import img1 from '../assets/img/portfolio/1.jpg'
import img2 from '../assets/img/portfolio/2.jpg'
import img3 from '../assets/img/portfolio/3.jpg'
import img4 from '../assets/img/portfolio/4.jpg'
import img5 from '../assets/img/portfolio/5.jpg'
import img6 from '../assets/img/portfolio/6.jpg'

const portfolio = [
    {title:'Threads', subtitle:'llustration', image:img1, modalId:'#portfolioModal1',mId:'#portfolioModal1'},
    {title:'Explore', subtitle:'Graphic Design', image:img2, modalId:'#portfolioModal2'},
    {title:'Finish', subtitle:'Identity', image:img3, modalId:'#portfolioModal3'},
    {title:'Lines', subtitle:'Branding', image:img4, modalId:'#portfolioModal4'},
    {title:'Southwest', subtitle:'Website Design', image:img5, modalId:'#portfolioModal5'},
    {title:'Window', subtitle:'Photography', image:img6, modalId:'#portfolioModal6'},
]

class Portfolio extends Component {

    render(){
        return(
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                   
                   {portfolio.map((item,index) => {
                    return <PortfolioItem {...item} key={index}/>
                   })
                    }
                </div>
            </div>
        </section>
        )
    }
}

export default Portfolio;