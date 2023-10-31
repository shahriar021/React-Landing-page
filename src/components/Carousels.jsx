import Carousel from "react-bootstrap/Carousel";

import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/Crausal.css";

export default function Carousels() {
  const img1 =
    "https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const img2 =
    "https://media.istockphoto.com/id/1405056493/photo/ai-chatbot-intelligent-digital-customer-service-application-concept.jpg?s=2048x2048&w=is&k=20&c=u-m4P8V33cIMNfRBjK1OeJRTLbgyHQ3vByVZ41yPKv0=";

  const img3 =
    "https://media.istockphoto.com/id/1321462048/photo/digital-transformation-concept-system-engineering-binary-code-programming.jpg?s=612x612&w=0&k=20&c=Ib8RLw3_eCOo9N3YE4pvp9rcb_WmirjS-9x9R-vTd68=";

  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="crausalImg"
          style={{
            width: "100%",
            height: "500px",
            padding: "80px",
          }}
          src={img1}
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="crausalImg"
          style={{ width: "100%", height: "500px", padding: "80px" }}
          src={img2}
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="crausalImg"
          style={{ width: "100%", height: "500px", padding: "80px" }}
          src={img3}
          alt=""
        />
      </Carousel.Item>
    </Carousel>
  );
}
