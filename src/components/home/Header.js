import React, { useEffect, useRef } from "react";
import Navbar from "../shared/Navbar";
import SelectForm from "../shared/SelectForm";

import { gsap } from "gsap";

function Header() {
  let headerRef = useRef(null);
  let heroMain = useRef(null);
  let formAnimate = useRef(null);

  useEffect(() => {
    gsap.to(headerRef, 0, { css: { visibility: "visible" } });

    const hero = heroMain.firstElementChild;
    const heroText = hero.nextSibling;

    //HERO ANIMATE

    gsap.fromTo(
      hero,
      {
        x: 520,
        opacity: 0,

        ease: "power3.inOut",
      },
      {
        duration: 1.5,
        x: 0,
        opacity: 1,
        ease: "power3.inOut",
      },
      "start"
    );

    //HERO SUB TEXT

    gsap.fromTo(
      heroText,
      {
        x: -500,
        opacity: 0,
        ease: "power3.inOut",
      },
      {
        duration: 1.5,
        x: 0,
        opacity: 1,
        ease: "power3.inOut",
      },
      "start"
    );

    //FORM ANIMATION

    gsap.fromTo(
      formAnimate.current,
      {
        x: -1000,
        opacity: 0,
        ease: "power3.inOut",
      },
      {
        duration: 1.5,
        x: 0,
        opacity: 1,
        ease: "power3.inOut",
      },
      "start"
    );
  }, []);

  return (
    <header ref={(el) => (headerRef = el)}>
      <Navbar />
      <div className="navLine"></div>
      <div className="hero-container">
        <div className="hero-text" ref={(el) => (heroMain = el)}>
          <h1>
            HERITAGE<span>-X.</span>
          </h1>
          <p className="Hero-subheading">
            {" "}
            Bringing UNESCO World Heritage Sites To Your Doorstep.
          </p>
        </div>
        <SelectForm ref={formAnimate} />
      </div>
    </header>
  );
}

export default Header;
