import React,{Component} from "react";
import './assets/css/admincss.css';

class AdminWrapper extends Component{

    render(){
        return(
            <div id="admin-page">
                {this.props.children}
            </div>
        )
    }
}

export default AdminWrapper;