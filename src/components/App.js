import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  )
}

const App = () => {
  return(
    <div>
      {/* Rendering NavBar component*/}
      <NavBar />

      {/* Rendering Home component*/}
      <Home />

      {/* Rendering About component*/}
      <About />
    </div>
  );
}

{/* write an <About> component here */}


export default App;
