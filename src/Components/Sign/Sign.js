import React from "react";
import "./Sign.css";
import swal from 'sweetalert';

class Sign extends React.Component{

  constructor(props){
    super(props);
    this.state={
      signInEmail:'',
      signInPassword:'',
    }
  }

  onEmailChange=(event)=>{
    this.setState({signInEmail:event.target.value});
  }

  onPasswordChange=(event)=>{
    this.setState({signInPassword:event.target.value});
  }

  onSubmitSignin =()=>{
    fetch('https://facerecogapi-3eqv.onrender.com/signin',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email:this.state.signInEmail,
        password:this.state.signInPassword
      })
    })
    .then(response =>response.json())
    .then(user=>{
      if(user.id){
        this.props.loadUser(user);
        this.props.onRouteChange('home');
      }
      else{
        swal("Error","Please enter valid details","error");
      }

    })
  }

  render(){
    const {onRouteChange}=this.props;
    return(
      <div className="box center w-30 h5 ba">
        <h1>Login</h1>
        <input 
        onChange={this.onEmailChange}
        placeholder="Email" 
        className="input"/>
        <input
        onChange={this.onPasswordChange}
        placeholder="Password" 
        type="password" 
        className="inputs"/>
        <button 
        className="button"
        onClick={this.onSubmitSignin}>
        Sign In
        </button>
        <p className="para">Don't have an account?
        </p>
        <p onClick={()=>onRouteChange('register')} className="register">Register
        </p>
    </div> 
    );
  }
};

export default Sign;
