import { useState } from "react";

import { Button } from "react-bootstrap";

import "remixicon/fonts/remixicon.css";
import Styles from "./components/Styles";

function App() {
  const hairStyle = [
    { label: "Default", filename: "default.png" },
    { label: "Curls", filename: "curls.png" },
    { label: "Short", filename: "short.png" },
    { label: "Bang", filename: "bang.png" },
    { label: "Elegant", filename: "elegant.png" },
    { label: "Quiff", filename: "quiff.png" },
  ];

  const earsStyle = [
    { label: "Default", filename: "default.png" },
    { label: "Tilt Backward", filename: "tilt-backward.png" },
    { label: "Tilt Forward", filename: "tilt-forward.png" },
  ];

  const eyesStyle = [
    { label: "Default", filename: "default.png" },
    { label: "Angry", filename: "angry.png" },
    { label: "Naughty", filename: "naughty.png" },
    { label: "Panda", filename: "panda.png" },
    { label: "Smart", filename: "smart.png" },
    { label: "Star", filename: "star.png" },
  ];

  const mouthStyle = [
    { label: "Default", filename: "default.png" },
    { label: "Astonished", filename: "astonished.png" },
    { label: "Eating", filename: "eating.png" },
    { label: "Laugh", filename: "laugh.png" },
    { label: "Tongue", filename: "tongue.png" },
  ];

  const neckStyle = [
    { label: "Default", filename: "default.png" },
    { label: "Bend Backward", filename: "bend-backward.png" },
    { label: "Bend Forward", filename: "bend-forward.png" },
    { label: "Thick", filename: "thick.png" },
  ];

  const legStyle = [
    { label: "Default", filename: "default.png" },
    { label: "Tilt Backward", filename: "tilt-backward.png" },
    { label: "Tilt Forward", filename: "tilt-forward.png" },
    { label: "Game Console", filename: "game-console.png" },
    { label: "Cookie", filename: "cookie.png" },
    { label: "Bubble Tea", filename: "bubble-tea.png" },
  ];

  const accessories = [
    { label: "Earings", filename: "earings.png" },
    { label: "Flower", filename: "flower.png" },
    { label: "Glasses", filename: "glasses.png" },
    { label: "Headphone", filename: "headphone.png" },
  ];

  const backgrounds = [
    { label: "Blue 50", filename: "blue50.png" },
    { label: "Blue 60", filename: "blue60.png" },
    { label: "Blue 70", filename: "blue70.png" },
    { label: "Dark Blue 30", filename: "darkblue30.png" },
    { label: "Dark Blue 50", filename: "darkblue50.png" },
    { label: "Dark Blue 70", filename: "darkblue70.png" },
    { label: "Green 50", filename: "green50.png" },
    { label: "Green 60", filename: "green60.png" },
    { label: "Green 70", filename: "green70.png" },
    { label: "Grey 70", filename: "grey70.png" },
    { label: "Grey 40", filename: "grey40.png" },
    { label: "Grey 80", filename: "grey80.png" },
    { label: "Red 50", filename: "red50.png" },
    { label: "Red 60", filename: "red60.png" },
    { label: "Red 70", filename: "red70.png" },
    { label: "Yellow 50", filename: "yellow50.png" },
    { label: "Yellow 60", filename: "yellow60.png" },
    { label: "Yellow 70", filename: "yellow70.png" },
  ];
  const [styles, setStyles] = useState([]);
  const [styleType, setStyleType] = useState("");
  const [backgroundPath, setBackgroundPath] = useState(
    "/images/backgrounds/blue50.png"
  );
  const [earPath, setEarPath] = useState("/images/ears/default.png");
  const [neckPath, setNeckPath] = useState("/images/neck/default.png");
  const [legPath, setLegPath] = useState("/images/leg/default.png");
  const [eyesPath, setEyesPath] = useState("/images/eyes/default.png");
  const [mouthPath, setMouthPath] = useState("/images/mouth/default.png");
  const [accessoriesPath, setAccessoriesPath] = useState(
    "/images/accessories/headphone.png"
  );
  const [hairPath, setHairPath] = useState("/images/hair/default.png");

  const handleOnStyleClick = (filename) => {
    if (styleType === "hair") {
      const _hairPath = "images/hair/" + filename;
      setHairPath(_hairPath);
    }
    if (styleType === "backgrounds") {
      const _backgroundPath = "images/backgrounds/" + filename;
      setBackgroundPath(_backgroundPath);
    }
    if (styleType === "ears") {
      const _earPath = "/images/ears/" + filename;
      setEarPath(_earPath);
    }
    if (styleType === "neck") {
      const _neckPath = "/images/neck/" + filename;
      setNeckPath(_neckPath);
    }
    if (styleType === "leg") {
      const _legPath = "/images/leg/" + filename;
      setLegPath(_legPath);
    }
    if (styleType === "eyes") {
      const _eyesPath = "/images/eyes/" + filename;
      setEyesPath(_eyesPath);
    }
    if (styleType === "mouth") {
      const _mouthPath = "/images/mouth/" + filename;
      setMouthPath(_mouthPath);
    }
    if (styleType === "accessories") {
      const _accessoriesPath = "/images/accessories/" + filename;
      setAccessoriesPath(_accessoriesPath);
    }
  };

  const handleClick = (styles, type) => {
    setStyles(styles);
    setStyleType(type);
  };

  return (
    <div className="container">
      <div>
        <h1>ALPACA GENERATOR</h1>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ position: "relative", flexGrow: 1 }}>
          <img
            style={{ position: "relative", zIndex: 0 }}
            src={backgroundPath}
            alt="backgound"
          />
          <img
            style={{ position: "absolute", left: 0, zIndex: 1 }}
            src={earPath}
            alt="ears"
          />
          <img
            style={{ position: "absolute", left: 0, zIndex: 2 }}
            src={neckPath}
            alt="neck"
          />
          <img
            style={{ position: "absolute", left: 0, zIndex: 2 }}
            src={legPath}
            alt="leg"
          />
          <img
            style={{ position: "absolute", left: 0, zIndex: 3 }}
            src="/images/nose.png"
            alt="nose"
          />
          <img
            style={{ position: "absolute", left: 0, zIndex: 3 }}
            src={eyesPath}
            alt="eyes"
          />
          <img
            style={{ position: "absolute", left: 0, zIndex: 3 }}
            src={mouthPath}
            alt="mouth"
          />
          <img
            style={{ position: "absolute", left: 0, zIndex: 4 }}
            src={accessoriesPath}
            alt="accessories"
          />
          <img
            style={{ position: "absolute", left: 0, zIndex: 2 }}
            src={hairPath}
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
              <Button
                onClick={() => {
                  handleClick(hairStyle, "hair");
                }}
                variant="outline-primary"
              >
                Hair
              </Button>
              <Button
                variant="outline-primary"
                onClick={() => {
                  handleClick(earsStyle, "ears");
                }}
              >
                Ears
              </Button>
              <Button
                variant="outline-primary"
                onClick={() => {
                  handleClick(eyesStyle, "eyes");
                }}
              >
                Eyes
              </Button>
              <Button
                variant="outline-primary"
                onClick={() => {
                  handleClick(mouthStyle, "mouth");
                }}
              >
                Mouth
              </Button>
              <Button
                variant="outline-primary"
                onClick={() => {
                  handleClick(neckStyle, "neck");
                }}
              >
                Neck
              </Button>
              <Button
                variant="outline-primary"
                onClick={() => {
                  handleClick(legStyle, "leg");
                }}
              >
                Leg
              </Button>
              <Button
                variant="outline-primary"
                onClick={() => {
                  handleClick(accessories, "accessories");
                }}
              >
                Accessories
              </Button>
              <Button
                variant="outline-primary"
                onClick={() => {
                  handleClick(backgrounds, "backgrounds");
                }}
              >
                Background
              </Button>
            </div>
          </div>
          <div className="flex-grow-1">
            <h3 className="mb-4">Style</h3>
            <Styles styles={styles} onStyle={handleOnStyleClick} />
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
