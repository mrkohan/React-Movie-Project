import React, { Component } from "react";

export default class Slider extends Component {
  render() {
    return (
       
        <div  id="slider">
          <div className="slides">
            <div className="slider">
              <div className="legend"></div>
              <div className="content">
                <div className="content-txt">
                  <h1>Deadpool</h1>
                  <h2>A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelrated healing powers, adopting the alter ego Deadpool.</h2>
                </div>
              </div>
              <div className="image">
                <img height="500" src="slider/deadpool.jpg" />
              </div>
            </div>
         
            <div className="slider">
              <div className="legend"></div>
              <div className="content">
                <div className="content-txt">
                  <h1>We are the Millers</h1>
                  <h2>A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.</h2>
                </div>
              </div>
              <div className="image">
                <img height="500" src="slider/weare.jpg" />
              </div>
            </div>

            <div className="slider">
              <div className="legend"></div>
              <div className="content">
                <div className="content-txt">
                  <h1>Gangster Squad</h1>
                  <h2>It’s 1949 Los Angeles, the city is run by gangsters and a malicious mobster, Mickey Cohen. Determined to end the corruption, John O’Mara assembles a team of cops, ready to take down the ruthless leader and restore peace to the city.</h2>
                </div>
              </div>
              <div className="image">
                <img height="500" src="slider/GangsterSquad.jpg" />
              </div>
            </div>

            <div className="slider">
              <div className="legend"></div>
              <div className="content">
                <div className="content-txt">
                  <h1>Jurassic World</h1>
                  <h2>A new theme park is built on the original site of Jurassic Park. Everything is going well until the park’s newest attraction–a genetically modified giant stealth killing machine–escapes containment and goes on a killing spree.</h2>
                </div>
              </div>
              <div className="image">
                <img height="500" src="slider/park.jpg" />
              </div>
            </div>

          </div>
       
        </div>
    );
  }
}
