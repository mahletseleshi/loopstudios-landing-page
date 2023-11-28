import React from "react";
import logo from "../images/logo.svg";
import interactive from "../images/desktop/image-interactive.jpg";
import deep from "../images/desktop/image-deep-earth.jpg";
import Night from "../images/desktop/image-night-arcade.jpg";
import soccer from "../images/desktop/image-soccer-team.jpg";
import grid from "../images/desktop/image-grid.jpg";
import above from "../images/desktop/image-from-above.jpg";
import pocket from "../images/desktop/image-pocket-borealis.jpg";
import curiosity from "../images/desktop/image-curiosity.jpg";
import fisheye from "../images/desktop/image-fisheye.jpg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pintrest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";

const desktop = () => {
return (
    <div className="font-josefin    ">
      <header className="bg-header bg-cover bg-center bg-no-repeat h-screen px-10">
        <nav className="flex items-center justify-between p-24">
          <img className="h-fit" src={logo}  alt="logo"></img>
          <ul className="flex gap-10 text-white">
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Producs</li>
            <li>Support</li>
          </ul>
        </nav>
       <div className="p-24">
        <h1 className=" pl-8 py-10 leading-[0.9] text-[80px] w-[40rem]  border-2 text-white">IMMERSIVE EXPERINCES THAT DELIVER</h1>
        </div>
      </header>

      <section className="px-44 py-28 flex items-center relative">
        <div >
          <img src={interactive} alt="interactive"></img>
        </div>

        <div className=" bg-white absolute top-[300px] left-[700px]  w-[700px] p-24">
          <h2 className="text-6xl mb-10" >THE LEADER IN INTERACTIVE UI</h2>
          <p>
            Founded in 2011, loopstudios has been producing world-class virtual
            reality projects for some of the best compnaies around the globe.
            Our award-winning creations have transformed businesses through
            digital experinces that bind to thier brand.
          </p>
        </div>
      </section>

      <section className="p-32 relative">
  <div className="flex justify-between items-center">
    <h2 className="text-4xl">OUR CREATIONS</h2>
    <button className="border-2 border-black px-6 py-1">SEE ALL</button>
  </div>
  <div className="flex flex-wrap justify-between items-center mt-6">
    <div className="w-1/4 relative mb-10">
      <img src={deep} alt="deep" />
      <h3 className="absolute bottom-0 left-0 px-5 py-1 text-white text-4xl w-52 mb-2">
        DEEP EARTH
      </h3>
    </div>

    <div className="w-1/4 relative mb-10">
      <img src={Night} alt="night" />
      <h3 className="absolute bottom-0 left-0 px-5 py-1 text-white text-4xl w-52 mb-2">
        NIGHT ARCADE
      </h3>
    </div>

    <div className="w-1/4 relative mb-10">
      <img src={soccer} alt="night" />
      <h3 className="absolute bottom-0 left-0 px-5 py-1 text-white text-4xl w-52 mb-2">
        SOCCER TEAM VR
      </h3>
    </div>

    <div className="w-1/4 relative mb-10">
      <img src={grid} alt="night" />
      <h3 className="absolute bottom-0 left-0 px-5 py-1 text-white text-4xl w-48 mb-2">
        THE GRID
      </h3>
    </div>

    <div className="w-1/4 relative">
      <img src={above} alt="soccer" />
      <h3 className="absolute bottom-0 left-0 px-5 py-1 text-white text-[32px] leading-tight w-52 mb-2">
        FROM UP ABOVE VR
      </h3>
    </div>

    <div className="w-1/4 relative">
      <img src={pocket} alt="grid" />
      <h3 className="absolute bottom-0 left-0 px-5 py-1 text-white text-4xl w-52 mb-2">
        POCKET BOREALS
      </h3>
    </div>

    <div className="w-1/4 relative">
      <img src={curiosity} alt="grid" />
      <h3 className="absolute bottom-0 left-0 px-5 py-1 text-white text-4xl w-52 mb-2">
          THE CURIOSITY
      </h3>
    </div>

    <div className="w-1/4 relative">
      <img src={fisheye} alt="grid" />
      <h3 className="absolute bottom-0 left-0 px-5 py-1 text-white text-4xl w-52 mb-2">
        MAKE IT FISHEYE
      </h3>
    </div>
  </div>
</section>



      <footer className="flex flex-col bg-black text-white px-24 py-12 space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="logo"></img>
          </div>

          <div className="flex gap-6">
            <img src={facebook} alt="icon"></img>
            <img src={twitter} alt="icon"></img>
            <img src={pintrest} alt="icon"></img>
            <img src={instagram} alt="icon"></img>
          </div>
        </div>

        <div className="flex justify-between">
          <ul className="flex gap-6">
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Producs</li>
            <li>Support</li>
          </ul>
          <div>
            <p>2021 loopstudios.All right reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default desktop;
