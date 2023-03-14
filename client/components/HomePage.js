import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./NormalLanding/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="beautifulimage">
        <div className="textstuff">
          <h2>Welcome, name here</h2>
          <div> Add a new todo here: ______________ </div>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
