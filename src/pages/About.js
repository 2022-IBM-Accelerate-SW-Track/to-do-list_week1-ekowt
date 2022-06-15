import React, { Component } from 'react';
import "./About.css";
import profile_pic from "../assests/ekow.jpeg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          // Image goes here
          src = {profile_pic}
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Ekow Thompson</div>
        <div className="brief_description">
          Hey Everyone! My name is Ekow Thompson. I am 21 years old. 
          I am rising senior at the University at Albany. I started coding when I was 15 years and 
          I can say it has been a journey. In my spare time I love to play soccer, watch soccer and talk soccer.
          My favourite team is Chelsea Fc which is based in London. I'm a lakers Fan as well and Lebron is my favorite player.

        </div>
      </div>
    </div>
      </div>
    )
  }
}