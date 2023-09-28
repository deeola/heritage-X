import React, { useContext, useEffect, useRef } from "react";
import heritageContext from "../context/Heritage/heritageContext";
import uuid from "react-uuid";
import { Link } from "react-router-dom";
import loadingimage from "../../assets/icons/loadingtwo.gif";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector, useDispatch } from "react-redux";

gsap.registerPlugin(ScrollTrigger);

function Africa() {
  const dispatch = useDispatch();
  const HeritageContext = useContext(heritageContext);
  const {
    Africa,
    getAfrica,
    getAll,
    storeTaskInLocalStoragesVisited,
    storeTaskInLocalStorages,
    loading,
  } = HeritageContext;

  //ANIMATION

  let refs = useRef(null);
  let revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    getAfrica();
    // ANIMATION

    //ANIMNATE HEADER

    gsap.fromTo(
      refs,
      {
        duration: 5,
        x: 1000,
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

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (revealRefs.current.length !== 0) {
      revealRefs.current.forEach((el, index) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            ease: "power3.easeinOut",
          },
          {
            duration: 1,

            opacity: 1,
            ease: "power3.easeinOut",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top center+=100",
              toggleActions: "play none",
            },
          }
        );
      });
    }
    // eslint-disable-next-line
  }, [revealRefs.current]);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <section className="subMain-container africacontainer">
      <div className="explore-container">
        <p className="explore" ref={(el) => (refs = el)}>
          Explore Africa
        </p>
        <p className="explore-subtext">Wildlife, Medinas and Ancient Wonders</p>
      </div>
      <div className="grid-container">
        {Africa.map((item) => {
          return (
            <div className="site-container" key={uuid()} ref={addToRefs}>
              <div className="site-image">
                {loading ? (
                  <img alt="loadinggif" src={loadingimage}></img>
                ) : (
                  <Link className="myLinks" to={`${item.id}`}>
                    <img alt={item.name} src={item.image_url}></img>
                  </Link>
                )}
              </div>
              <p className="site-country">{item.states[0].name}</p>
              <p className="site-name">{item.name}</p>
              <div className="read-more" onClick={getAll}>
                <Link className="myLinks" to={`${item.id}`}>
                  Read more...
                </Link>
              </div>
              <div
                className="bucketlist"
                onClick={() => {
                  storeTaskInLocalStorages(item);
                }}
              >
                Save to Bucketlist{" "}
              </div>
              <div
                className="visited"
                onClick={() => {
                  storeTaskInLocalStoragesVisited(item);
                }}
              >
                Save to Visited{" "}
              </div>
            </div>
          );
        })}
      </div>

      <Link className="seeMoreLink" to="/Africa">
        <p className="seeMore">
          See More From Africa <i className="fas fa-chevron-right"></i>
        </p>{" "}
      </Link>
    </section>
  );
}

export default Africa;
