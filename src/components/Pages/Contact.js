import React,{Component} from "react";
import Field from "../Common/Field";
import { withFormik } from "formik";
import * as Yup from 'yup';

const fields = {
    sections:[
        [
            {name:'name', elementName:'input',type:'text',placeholder:'Your name'},
            {name:'email', elementName:'input',type:'email',placeholder:'Your email'},
            {name:'phone', elementName:'input',type:'text',placeholder:'Your phone number'},
            
        ],
        [
            {name:'message', elementName:'textarea',type:'text',placeholder:'Type your Message'},
        ]
    ]
}

class Contact extends Component {

    render(){
        return(
            <div>

            <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <form id="contactForm" onSubmit={this.props.handleSubmit}>
                    <div className="row align-items-stretch mb-5">
                        {
                            fields.sections.map((section, sectionIndex) => {
                                
                                return (
                                    <div className="col-md-6" key={sectionIndex}>
                                        {section.map((field,i) => {
                                            return <Field 
                                                        {...field} 
                                                        key={i} 
                                                        value = {this.props.values[field.name]}
                                                        name={field.name}
                                                        onChange={this.props.handleChange}
                                                        onBlur={this.props.handleBlur}
                                                        touched={(this.props.touched[field.name])}
                                                        errors={this.props.errors[field.name]}
                                                    />
                                        })}
                                    </div>
                                )
                            })
                        }
                    </div>                   
                    {/* <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div> */}
                    <div className="col-lg-12 text-center">
                        <button 
                        className="btn btn-primary btn-xl text-uppercase" 
                        id="submitButton" 
                        type="submit"
                        // onClick={(e) => this.submitForm}
                        >Send Message</button></div>
                </form>
            </div>
        </section>
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">Copyright &copy; Your Website 2022</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i
                                className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i
                                className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i
                                className="fab fa-linkedin-in"></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
        </div>
        )
    }
}

export default withFormik({
    mapPropsToValues:() => ({
        name:'',
        email:'',
        phone:'',
        message:''
    }),
    validationSchema:Yup.object().shape({
        name:Yup.string().min(5,'Your name is longer!').required("Name is Required!"),
        email:Yup.string().email('Kindly share a valid Email!').required('Email is Required!'),
        phone:Yup.string()
            .min(10,'Please share your 10 digit phone number')
            .max(13,'Your phone number is to long!')
            .required('Phone Number is required'),
        message:Yup.string().min(50,'Please provide more detaile info').required('Message is required')
    }),
    handleSubmit:(values, {setSubmitting}) =>{
        alert('Submitted the Form Hurray!', JSON.stringify(values));
    }
})(Contact);