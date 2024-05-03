import Navbar from "./Navbar";

function About() {
    return (
      <>
        <header>
          {/* Save space for NavBar */}
          <Navbar />
        </header>
        <main>
          <h1>This is my about component!</h1>
        </main>
      </>
    );
  };
  
  export default About;