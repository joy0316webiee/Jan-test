import React, { Component } from "react";

// components
import Navbar from "../components/Navbar";
import ProfileList from "../components/ProfileList";

// services
import services from "../services";

// styles
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: [],
    };
  }

  async componentDidMount() {
    const { data } = await services.listUsers();
    if (data) {
      this.setState({ profiles: data });
    }
  }

  render() {
    const { profiles } = this.state;

    return (
      <div className="home-container">
        <Navbar />

        <div className="left-panel">
          <div className="content">
            <h1 className="title">Welcome! Thanks for joining us.</h1>
            <div className="bg-img" />
            <a
              className="set-account"
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Set up your account
            </a>
          </div>
          <div className="footer">
            <h3>Description</h3>
            <p>
              Hanc ego cum soluta nobis est laborum et accusamus et via procedat
              oratio. Sed ut ad modum, quaeso, interpretaris? sicine eos censes
              aut rerum hic tenetur.
            </p>
          </div>
        </div>

        <div className="right-panel">
          <h2>Profile list</h2>
          <p>
            Laudem et via procedat oratio quaerimus igitur, quid et accurate
            disserendum et dolorem?. At magnum periculum adiit in oculis quidem
            exercitus quid ex ea voluptate et.
          </p>

          <ProfileList profiles={profiles} />
        </div>
      </div>
    );
  }
}

export default App;
