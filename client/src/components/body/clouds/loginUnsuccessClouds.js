import React, { Component } from "react";

// import ContactForm from "../../auth/contact/contactForm";

class LoginUnsuccessClouds extends Component {
  render() {
    return (
      <div className="clouds-svg">
        <svg className="background" xmlnsXlink="http://www.w3.org/2000/svg">
          <filter id="filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.003"
              numOctaves="5"
            />
            <feColorMatrix
              values="1 -1 0 0 0
                               1 -1 0 0 0
                               1 0 0 0 0
                               -1 0 0 0 1"
            />
            <feComponentTransfer>
              <feFuncR
                type="table"
                tableValues="0 .02 .03 .03 .09 .12 .27 .91 .3 .03 0 0"
              />
              <feFuncG
                type="table"
                tableValues=".01 .09 .16 .18 .38 .48 .54 .73 .33 .09 .01 .01"
              />
              <feFuncB
                type="table"
                tableValues=".03 .17 .3 .25 .37 .42 .42 .6 .17 .01 0 0"
              />
            </feComponentTransfer>
          </filter>
          <rect width="100%" height="100%" filter="url(#filter)" />
          <foreignObject x="300" y="100" width="800" height="250">
            <div className="header">
              The Email or Password you entered is invalid... Please, go back to{" "}
              <a href="/login">Login</a> to Sign in to try again or{" "}
              <a href="/register">Register</a> if you have not registered.
              Please, contact ShannaAdmin with the contact section if you need
              assistance.
            </div>
          </foreignObject>
        </svg>
      </div>
    );
  }
}

export default LoginUnsuccessClouds;
