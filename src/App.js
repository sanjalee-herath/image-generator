import { Button } from "react-bootstrap";

import "remixicon/fonts/remixicon.css";

function App() {
  return (
    <div className="container">
      <div>
        <h1>ALPACA GENERATOR</h1>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ position: "relative", flexGrow: 1 }}>
          <img
            style={{ position: "relative", zIndex: 0 }}
            src="/images/backgrounds/blue50.png"
            alt="backgound"
          />
          <img
            style={{ position: "absolute", left: 0, zIndex: 1 }}
            src="/images/ears/default.png"
            alt="backgound"
          />
          <img
            style={{ position: "absolute", left: 0, zIndex: 2 }}
            src="/images/neck/default.png"
            alt="neck"
          />
          <img
            style={{ position: "absolute", left: 0, zIndex: 2 }}
            src="/images/leg/default.png"
            alt="leg"
          />
          <img
            style={{ position: "absolute", left: 0, zIndex: 3 }}
            src="/images/nose.png"
            alt="nose"
          />
          <img
            style={{ position: "absolute", left: 0, zIndex: 3 }}
            src="/images/eyes/default.png"
            alt="eyes"
          />
          <img
            style={{ position: "absolute", left: 0, zIndex: 3 }}
            src="/images/mouth/default.png"
            alt="mouth"
          />
          <img
            style={{ position: "absolute", left: 0, zIndex: 4 }}
            src="/images/accessories/headphone.png"
            alt="accessories"
          />
          <img
            style={{ position: "absolute", left: 0, zIndex: 2 }}
            src="/images/hair/default.png"
            alt="hair"
          />
        </div>
        <div
          className="d-flex flex-column align-content-between ms-3"
          style={{ flexGrow: 1 }}
        >
          <div className="flex-grow-1">
            <h3 className="mb-4">Accessories the alpaca's</h3>
            <div className="d-flex gap-3">
              <button type="button" class="btn btn-outline-primary">
                Hair
              </button>
              <button type="button" class="btn btn-outline-primary">
                Ears
              </button>
              <button type="button" class="btn btn-outline-primary">
                Eyes
              </button>
              <button type="button" class="btn btn-outline-primary">
                Mouth
              </button>
              <button type="button" class="btn btn-outline-primary">
                Neck
              </button>
              <button type="button" class="btn btn-outline-primary">
                Leg
              </button>
              <button type="button" class="btn btn-outline-primary">
                Accessories
              </button>
              <button type="button" class="btn btn-outline-primary">
                Background
              </button>
            </div>
          </div>
          <div className="flex-grow-1">
            <h3 className="mb-4">Style</h3>
            <div className="d-flex gap-3">
              <button type="button" class="btn btn-outline-primary">
                Default
              </button>
              <button type="button" class="btn btn-outline-primary">
                Curls
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex mt-5">
        <div className="flex-grow-1">
          <div className="d-flex justify-content-evenly">
            <Button variant="light">
              <div className="d-flex gap-2">
                <i class="ri-shuffle-fill"></i>
                Random
              </div>
            </Button>
            <Button variant="light">
              <div className="d-flex gap-2">
                <i class="ri-download-line"></i>
                Download
              </div>
            </Button>
          </div>
        </div>
        <div className="flex-grow-1"></div>
      </div>
    </div>
  );
}

export default App;
