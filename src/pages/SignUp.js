import React from "react";
import HeaderTopNav from "../components/HeaderTopNav";
import Emoji from "../utils/Emoji";

function SignUp() {
  return (
    <>
      <HeaderTopNav />
      <div className=" bg-main-blue relative" style={{ height: "90vh" }}>
        <h1
          className="absolute top-48 text-white ml-20"
          style={{ fontSize: 200 }}
        >
          SIGN-UP
        </h1>
        <div className="absolute" style={{ top: "28rem", left: "48rem" }}>
          <h1 className="text-white">
            <Emoji symbol="👉" />I am a student
          </h1>
          <h1 className="text-white">
            <Emoji symbol="👉" />I am a tutor
          </h1>
        </div>
      </div>
    </>
  );
}

export default SignUp;
