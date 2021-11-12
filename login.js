//<button type="button" data-dismiss="modal" aria-label="Close" class="close modal-close-icon-gray-lightest text-gray-darker"><span aria-hidden="true">×</span>
       //   </button>

import React , { useState } from "react";
import {Redirect, withRouter} from 'react-router';
 
import { useHistory } from 'react-router-dom';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
  } from "@material-ui/core";
  import DialogContentText from "@material-ui/core/DialogContentText";
import axios from "axios"

function Login() {
    const [message, setMessage] = useState(" ")
    const history = useHistory()
    const [email , setEmail ] = useState("")
    const [name , setName ] = useState("")
    const [password , setPassword ] = useState("")
    const [passworda , setPassworda ] = useState("")
    const [passwordb , setPasswordb ] = useState("")
    const [open, setOpen] = useState(false);
    const [opens, setOpens] = useState(false);

  const handleClickOpen = (e) => {
    setOpen(true);

  };
  const handleClickOpens = (e) => {
    setOpens(true);

  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloses = () => {
    setOpens(false);
  };

    const refresh =() =>{
        setEmail("")
        setPassword("")
    }
    const refreshs =() =>{
        setName("")
        setEmail("")
        setPassworda("")
        setPasswordb("")
    }


    const Logins = (e) => {
            e.preventDefault()
            if ( email !== "" && password !=="" && email != null && password != null) {
                let a = { email , password}

                axios.post("http://localhost:5000/api/login", a)
                    .then(data => { localStorage.setItem("auth" ,JSON.stringify(data.data));console.log(data)  })
                    
                    .then(() => {history.push("/course")})
                    
               
                    .catch(e => console.log(e))

                refresh()
            }    // 

    

    }


    const registers = (e) => {

        e.preventDefault()
        if ( email !== "" && name !== "" && passworda !== "" && passwordb !=="" && name!=null && email != null && passworda != null && passwordb != null && passworda == passwordb) {
            let a = { "name" : name , "email"  :email , "password" : passworda}

            axios.post("http://localhost:5000/api", a)
                .then(data =>  localStorage.setItem("auth" ,JSON.stringify(data.data) ))
                .catch(e => console.log(e))

            refreshs()
        setMessage("Submited sucessfully...")
      
        }    // 
}



    return (
        <div className="container-fluid details-page-bg">
              <br/>
              <br/>
              

{/* <button className="btn btn-success" type="button" onClick={Logout}>logout</button> */}
            <button className="btn btn-success" type="button" onClick={e => handleClickOpens(e)} > Register </button>
            <button className="btn btn-success" type="button" onClick={e => handleClickOpen(e)} > Login </button>
            
            <Dialog open={open} className="mainbox" onClose={handleClose}>
            <div class="row">
                <div class="col-xs-12  flex-center flex-direction-column">
           
                <DialogTitle>
                <p class="h5 line-height-30">Login</p>
                    <button class="close modal-close-icon-gray-lightest text-gray-darker" onClick={handleClose}>x</button>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    <form className="p-5" onSubmit={Logins}>
                <div className="form-group m-top-xs p-top-xs p-bottom-xs">
                    <label className="h6 text-gray">Email</label>
                    <input class="form-control input-sm text-base focused-element" placeholder="email" type="email" value={email} onChange={e=> setEmail(e.target.value)} />
                </div>
                <div className="m-top-xs p-top-xs p-bottom-xs form-group">
                    <label className="h6 text-gray">Password</label>
                    <input class="form-control input-sm text-base focused-element" placeholder="password" type="password" value={password} onChange={e=> setPassword(e.target.value)} />
                </div>
                <div>  <button class="btn btn-primary btn-fluid text-base btn-xs text-uppercase b-radius-1" type="submit">Login</button> </div>
            </form> 
                    </DialogContentText>
                </DialogContent>
                </div>
                <input id="userID" type="hidden"/>
              </div>

                </Dialog>   






                <Dialog open={opens} className="mainbox" onClose={handleCloses}>
            <div class="row">
                <div class="col-xs-12  flex-center flex-direction-column">
           
                <DialogTitle>
                <p class="h5 line-height-30">Register</p>
                    <button class="close modal-close-icon-gray-lightest text-gray-darker" onClick={handleCloses}>x</button>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    <form className="p-5" onSubmit={registers}>
                    <div className="form-group m-top-xs p-top-xs p-bottom-xs">
                    <label className="h6 text-gray">Name</label>
                    <input class="form-control input-sm text-base focused-element" placeholder="name" type="text" value={name} onChange={e=> setName(e.target.value)} />
                </div>
                <div className="form-group m-top-xs p-top-xs p-bottom-xs">
                    <label className="h6 text-gray">Email</label>
                    <input class="form-control input-sm text-base focused-element" placeholder="email" type="email" value={email} onChange={e=> setEmail(e.target.value)} />
                </div>
                <div className="m-top-xs p-top-xs p-bottom-xs form-group">
                    <label className="h6 text-gray">Type Password</label>
                    <input class="form-control input-sm text-base focused-element" placeholder="password" type="password" value={passworda} onChange={e=> setPassworda(e.target.value)} />
                </div>
                <div className="m-top-xs p-top-xs p-bottom-xs form-group">
                    <label className="h6 text-gray">Retype Password</label>
                    <input class="form-control input-sm text-base focused-element" placeholder="password" type="password" value={passwordb} onChange={e=> setPasswordb(e.target.value)} />
                </div>

                <div>  <button class="btn btn-primary btn-fluid text-base btn-xs text-uppercase b-radius-1" type="submit">Register</button> </div>
            </form> 
            <div>
                {message && message}
            </div>
                    </DialogContentText>
                </DialogContent>
                </div>
            
              </div>

                </Dialog>   
                
                </div>
          
    )
}

export default withRouter(Login)