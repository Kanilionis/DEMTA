import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/Nav/NavTabs";
import Home from "./pages/Home";
import About from "./pages/About"
import OurPiano from "./pages/OurPiano"
import Membership from "./pages/Membership"
import Events from "./pages/Events"
import Festival from "./pages/Festival"
import Forms from "./pages/Forms"
import Contact from "./pages/Contact"
import Teachers from "./pages/Teachers"
import Header from "./components/Header/Header"
import Links from "./components/Links/Links"
import Footer from "./components/Footer/Footer"
import "./index.css"




function App() {
  return (
    <>
    <Router>
      <div>
        <Header/>
        <NavTabs />
        <Links/>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/ourpiano" component={OurPiano} />
        <Route exact path="/membership" component={Membership} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/festival" component={Festival} />
        <Route exact path="/forms" component={Forms} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/teachers" component={Teachers} />
      </div>
    </Router>
    
    <Footer/>
    </>
  );
}

export default App;