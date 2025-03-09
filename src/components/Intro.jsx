import TypedText from "./TypedText";
import bsp from "../assets/images/bsp.jpg";

function Intro() {
  return (
    <div className="container d-flex flex-md-row flex-column-reverse justify-content-evenly mb-4">
        <div className="align-content-center">
           <h1 className="text-danger"><TypedText/></h1>
           <h3>Aspiring Java Full Stack Developer | Problem Solver | Tech Enthusiast</h3>
        </div>
        <div className="align-content-center">
            <img src={bsp} alt="BSP" height="650"/>
        </div>
      {/* <hr /> */}
    </div>
  )
}

export default Intro
