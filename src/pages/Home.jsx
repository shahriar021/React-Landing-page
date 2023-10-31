import Carousels from "../components/Carousels";
import { Barchart } from "../components/chart/Barchart";
import Bounce from "react-reveal/Bounce";

export default function Home() {
  return (
    <div>
      <Carousels />

      <div>
        <Bounce top>
          <h1>BangladeshIT</h1>
          <p>
            BangladeshIT growing IT company is on an exciting path, leveraging
            innovation and a dedicated team to deliver cutting-edge solutions
            and meet the evolving technology needs of your clients. With a
            commitment to excellence, BangladeshIT company is poised for
            continued success and industry recognition.
          </p>
        </Bounce>
      </div>

      <div style={{ margin: "100px" }}>
        <Barchart />
      </div>
    </div>
  );
}
