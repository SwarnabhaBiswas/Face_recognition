import React from "react";
import "./Register.css";


class Register extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      name:''
    }
  }

  onEmailChange=(event)=>{
    this.setState({email:event.target.value});
  }

  onPasswordChange=(event)=>{
    this.setState({password:event.target.value});
  }

  onNameChange=(event)=>{
    this.setState({name:event.target.value});
  }
  
  onSubmitSignin =()=>{
    fetch('https://facerecogapi-3eqv.onrender.com/register',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email:this.state.email,
        password:this.state.password,
        name:this.state.name
      })
    })
    .then(response =>response.json())
    .then(user=>{
      if(user.id){
        this.props.loadUser(user);
        this.props.onRouteChange('home');
      }
      else{
        console.log("w");
      }

    })
  }

    render(){
      const {onRouteChange}=this.props;
      return(
        <div className="box center w-30 h5 ba">
        <h1>Register</h1>
        <input
        onChange={this.onNameChange}
        placeholder="Name" className="inputsss"/>
        <input
        onChange={this.onEmailChange}
        placeholder="Email" 
        className="inputs"/>
        <input 
        onChange={this.onPasswordChange}
        placeholder="Password" 
        type="password" 
        className="inputss"/>
        <button 
        onClick={this.onSubmitSignin}>Register</button>
        <p className="registers">Already have an account?</p> 
        <p onClick={()=>onRouteChange('signin')} 
        className="signlink">Sign In</p> 
    </div>);
    }
};

export default Register;
