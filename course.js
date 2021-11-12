import {withRouter} from 'react-router';
import SearchField from "react-search-field";
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import {
    
  Link
} from "react-router-dom";
function Course() {
    const [email , setEmail ] = useState("")
    const history = useHistory()
    const Logout = () => {
      localStorage.clear("auth")
      history.push("/")
  
  }
    return (
        <div class="container-fluid details-page-bg">
               
               <div class="col-xs-12 text-right">
               <button className="btn btn-success" type="button" onClick={Logout}>logout</button>
           </div>
            
            <div row>
               
                <div class="col-xs-12 text-right">
                <SearchField
                  placeholder="Search..."
                  
                  searchText=""
                  classNames="test-class"
                />
            </div>
           
            <div class="col-xs-12 col-sm-6 text-center">
            <div class="panel panel-default">
            <div class="panel-body">
            <img alt="Loading Image..." class="img-responsive m-top-md m-bottom-lg" style={{width:"500px" , height:"500px"}}  src="https://media.istockphoto.com/photos/cyber-security-and-digital-data-protection-concept-picture-id1174366497" />
            <br/>
            Cyber Security for Beginners<br/><br/>
            <Link to="/" ><button className="btn btn-success btn-block">
             Start</button></Link>
            <br/> <br/>     
            </div>
            </div></div>

            <div class="col-xs-12 col-sm-6 text-center">
            <div class="panel panel-default">
            <div class="panel-body">
            <img alt="Loading Image..."  class="img-responsive m-top-md m-bottom-lg " style={{width:"500px" , height:"500px"}} src="https://media.istockphoto.com/photos/smart-female-it-programer-working-on-desktop-computer-in-data-center-picture-id1194430863" />
            <br/>
            Secure Coding Bootcamp<br/><br/>
            <Link to="/" >
            <button className="btn btn-success btn-block">
             Start</button></Link>
            <br/> <br/>     
            </div>
            </div></div>


            

            <div class="col-xs-12 col-sm-6 text-center">
            <div class="panel panel-default">
            <div class="panel-body">
            <img alt="Loading Image..."  class="img-responsive m-top-md m-bottom-lg" style={{width:"500px" , height:"500px"}} src="https://media.istockphoto.com/photos/young-women-using-computer-cyber-security-concept-picture-id1166334015" />
            <br/>
            Hands on with Top Ethical Hacking Tools<br/><br/>
            <Link to="/">
            <button className="btn btn-success btn-block">
             Start</button></Link>
            <br/> <br/>     
            </div>
            </div></div>

            <div class="col-xs-12 col-sm-6 text-center">
            <div class="panel panel-default">
            <div class="panel-body">
            <img alt="Loading Image..." class="img-responsive m-top-md m-bottom-lg" style={{width:"500px" , height:"500px"}} src="https://media.istockphoto.com/photos/digital-security-concept-picture-id1185245180" />
            <br/>
            Cyber Security: Secure Passwords on Linux<br/><br/>
            <Link to="/">
            <button className="btn btn-success btn-block">
             Start</button></Link>
            <br/> <br/>     
            </div>
            </div></div>  

            

          
            

           

           

            



            </div>


   

         <div class="row">
  <div class="col-xs-12">
    <div class="row viewport contact-banner-container  contact-olxpeople-viewport">
      <div class="container wow animate_animated animate__zoomIn text-center">
        <h3 class="h3 text-white m-y-axis-md p-y-axis-lg line-height-64 text-bold static-title">Posts are coming soon<br/>Stay tuned...</h3>
       
      </div>
    </div>
    </div>
    </div>
</div>

    )
}

export default withRouter(Course)