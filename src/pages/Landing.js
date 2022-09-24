import React from "react";
import HeaderMain from "../components/HeaderMain";
import bgImg from "../assets/sample-bg.jpg";
import Button from "../components/Button";

function Landing(props) {
  const { setGotoSignUp } = props;
  return (
    <>
      <HeaderMain />
      <div>
        <div className="landing-bg">
          <h1
            style={{ position: "absolute", top: "0px", left: "0px" }}
            className="text-white pl-2"
          >
            Tag LineTag LineTag LineTag Line
          </h1>
          <button
            className="rounded-full bg-main-yellow hover:bg-hover-yellow text-2xl font-bold heartbeat"
            style={{
              position: "absolute",
              top: "25%",
              left: "45%",
              height: 200,
              width: 200,
            }}
          >
            Enter site
          </button>
          <p
            id="text1"
            style={{
              position: "absolute",
              top: "64%",
              left: "32%",
              width: "40vw",
            }}
            className="text-white"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            tincidunt orci et vulputate facilisis. In lobortis aliquam lorem ut
            ullamcorper. Integer vel imperdiet quam. Integer molestie at ante
            quis facilisis. Fusce ut ex ultricies, interdum mi iaculis, lacinia
            lacus. Aenean vel orci ut turpis commodo consequat. In accumsan sit
            amet felis a congue. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos. Fusce ut ex ultricies,
            interdum mi iaculis, lacinia lacus. Aenean vel orci ut turpis
            commodo consequat. In accumsan sit amet felis a congue.
          </p>
        </div>
        <div
          className="bg-main-blue"
          style={{ height: "50vh", position: "relative" }}
        >
          <p
            id="text2"
            style={{
              width: "40vw",
              position: "absolute",
              top: "5%",
              left: "32%",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            tincidunt orci et vulputate facilisis. In lobortis aliquam lorem ut
            ullamcorper. Integer vel imperdiet quam. Integer molestie at ante
            quis facilisis. Fusce ut ex ultricies, interdum mi iaculis, lacinia
            lacus. Aenean vel orci ut turpis commodo consequat. In accumsan sit
            amet felis a congue. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos.
          </p>
          <div
            style={{
              position: "absolute",
              top: "73%",
              left: "42%",
            }}
          >
            <Button
              type="pink"
              title="SIGN-UP for FREE"
              color="white"
              size="h2"
              callback={() => setGotoSignUp(true)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
