import React, { Component } from "react";
import Features from "./components/features";
import Footer from "./components/footer";
import Layout from "./components/layout";
import Services from "./components/Services";
import "./kasper.css";
// import "./all.min.css"
import "./normalize.css"
class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Layout></Layout>
        <Services></Services>
        <Features></Features>
        <Footer></Footer>
      </>
    );
  }
}

export default App;
