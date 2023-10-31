import React, { useState } from "react";
import "../App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Jobs() {
  const [data, setData] = useState();
  console.log(data);

  const handleToast = () => {
    toast("successfully applied!  ");
  };

  return (
    <div className="job-block">
      <div className="job-info">
        <h3>Front-end developer</h3>
        <h5>requirements</h5>
        <p>javascript,react,html,css</p>
        <span>Deadline:10/11/2023</span>
        <hr></hr>
      </div>

      <div className="main">
        <input
          id="imgs"
          type="file"
          accept="image/png, image/jpeg,.txt,.doc,.pdf"
          onChange={(e) => setData(e.target.files)}
        />
      </div>
      <button onClick={handleToast}>Apply</button>
      <ToastContainer />
    </div>
  );
}
export default Jobs;
