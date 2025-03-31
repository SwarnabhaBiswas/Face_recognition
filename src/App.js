import React from "react";
import "./App.css";
import Particles from "./Components/Particles";
import Sign from "./Components/Sign/Sign";
import Register from "./Components/Register/Register";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import FaceDetection from "./Components/FaceDetection/FaceDetection";



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      route: "signin",
      user: {
        id: "",
        name: "",
        email: "",
        password: "",
        entries: 0,
        joined: '',
      },
    };
  }

  loadUser=(data)=>{
    this.setState({user:{
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password,
        entries: data.entries,
        joined: data.joined,
    }
    });
  }

  




  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  render() {
    return (
      <div className="App">
        <Particles id="particles" />
        {this.state.route === "home" ? (
          <div>
            <Navigation onRouteChange={this.onRouteChange} />
            <Logo />
            <p className='f2 center name'>Hello there.. {this.state.user.name}</p>
            <FaceDetection/>
          </div>
        ) 
        : this.state.route === "signin" ? (
          <Sign 
          loadUser={this.loadUser}
          onRouteChange={this.onRouteChange} />
        ) : (
          <Register
          loadUser={this.loadUser}
          onRouteChange={this.onRouteChange} />
        )
        }
      </div>
    );
  }
}

export default App;
