import TypedText from "./TypedText";
import bsp from "../assets/images/bsp.jpg";

function Intro() {
  return (
    <div className="container-fluid row d-flex flex-column-reverse d-lg-flex flex-lg-row text-sm-center text-center w-100">
        <div className="col align-content-lg-center">
           <h1 className="text-danger"><TypedText/></h1>
           <h2>Aspiring Java Full Stack Developer | Problem Solver | Tech Enthusiast</h2>
        </div>
        <div className="col">
            <img src={bsp} alt="BSP" height="600"/>
        </div>
      <hr />
    </div>
  )
}

export default Intro
