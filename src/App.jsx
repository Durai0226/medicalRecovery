import { useState } from "react";
import "./App.css";
import Department from "./componentes/department";
import Expert from "./componentes/expert";
import Footer from "./componentes/footer/footer";
import NavBar from "./componentes/header";
import JoinUs from "./componentes/joinUs";
import Leading from "./componentes/leading";
import NewsLetter from "./componentes/newsLetter/newsLetter";
import OurTeam from "./componentes/ourTeam/ourTeam";
import Rating from "./componentes/rating/rating";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <JoinUs></JoinUs>
      <Rating></Rating>
      <Expert></Expert>
      <Department></Department>
      <Leading></Leading>
      <OurTeam></OurTeam>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );
}

export default App;
