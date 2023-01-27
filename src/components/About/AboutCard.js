import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pankajkumar Patil </span>
            from <span className="purple"> Jalgaon, Maharashtra.</span>
            <br />I did post-graduation in Computer Application with 84.84%, from RCPETS IMRD College Shirpur.
Also, I Completed Graduation From MGSMS ASC Collage Chopda.
            <br />
            <br />
            Apart from this, I participated in social gatherings. I got an award for acting as well as  I got an award for singing also. 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Singing.
            </li>
            <li className="about-activity">
              <ImPointRight /> Acting.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always believe in yourself!"{" "}
          </p>
          <footer className="blockquote-footer">Pankaj Patil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
