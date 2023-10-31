import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import "../App.css";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
    margin: 10,
  },
};

export default function Feedback() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleToast = () => {
    toast("successfully submitted!  ");
  };

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "10px" }}>Top Reviews</h2>
      <div className="testimonial">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <i class="fa fa-quote-left"></i>
              <p>
                This IT company exceeded my expectations with their innovative
                solutions and excellent customer service.
                <br />
                They're a valuable partner for our tech needs.
              </p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <h3>Peter Park</h3>
            </div>

            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>
                Consistently reliable and forward-thinking, this IT company has
                played a pivotal role in our digital transformation,
                <br />
                ensuring our systems run seamlessly and securely
              </p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <h3>Jhon bal</h3>
            </div>

            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>
                This IT company's commitment to cutting-edge technology and
                their proactive support has streamlined our operations,
                resulting in increased efficiency and a significant competitive
                edge.
              </p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdrj0Dq-pxz-sdSzQNxMj-nN_4UqlnModw4QBemVJvr0jPHX_vDZXMVglWeM8hfC_KdwE&usqp=CAU"
                alt=""
              />
              <h3>Baker vai</h3>
            </div>
          </div>
        </div>
      </div>
      ), (
      <div style={styles.container} className="feedback">
        <h2> React Ratings </h2>
        <div style={styles.stars}>
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={
                  (hoverValue || currentValue) > index
                    ? colors.orange
                    : colors.grey
                }
                style={{
                  marginRight: 10,
                  cursor: "pointer",
                }}
              />
            );
          })}
        </div>
        <textarea
          placeholder="What's your experience?"
          style={styles.textarea}
        />

        <button style={styles.button} onClick={handleToast}>
          Submit
        </button>
        <ToastContainer />
      </div>
    </div>
  );
}
