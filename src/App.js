import { useState } from "react";

import { Button } from "react-bootstrap";

import "remixicon/fonts/remixicon.css";
import mergeImages from "merge-images";
import StyleButton from "./components/StyleButton";
import { getStylesFromCategory, styles } from "./styles";

function App() {
  const [styleCategory, setStyleCaregory] = useState("hair");
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

  const handleOnStyleChange = (category, filepath) => {
    setStyleCaregory(category);
    if (category === "hair") setHairPath(filepath);
    if (category === "backgrounds") setBackgroundPath(filepath);
    if (category === "ears") setEarPath(filepath);
    if (category === "neck") setNeckPath(filepath);
    if (category === "leg") setLegPath(filepath);
    if (category === "eyes") setEyesPath(filepath);
    if (category === "mouth") setMouthPath(filepath);
    if (category === "accessories") setAccessoriesPath(filepath);
  };

  const handleOnStyleCategoryClick = (category) => {
    setStyleCaregory(category);
  };

  const handleOnShuffleClick = () => {
    Object.keys(styles).map((category) => {
      const _styles = getStylesFromCategory(category);

      const _min = 0;
      const _max = _styles.styles.length - 1;
      const _random = Math.floor(Math.random() * (_max - _min + 1 + _min));

      const filepath = _styles.imagePath + _styles.styles[_random].filename;

      handleOnStyleChange(category, filepath);
    });
  };

  const handleOnDownloadClick = () => {
    mergeImages([
      backgroundPath,
      earPath,
      neckPath,
      legPath,
      hairPath,
      "/images/nose.png",
      eyesPath,
      mouthPath,
      accessoriesPath,
    ]).then((b64) => {
      fetch(b64)
        .then((response) => response.blob())
        .then((blob) => {
          const blobUrl = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = blobUrl;
          a.download = "image.png";
          a.click();
        });
    });
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <h1 className="fs-1 fw-bolder">ALPACA GENERATOR</h1>
      </div>
      <div className="row mt-3" style={{ height: "600px" }}>
        <div className="col" style={{ position: "relative", height: "100%" }}>
          <img
            style={{ position: "relative", zIndex: 0, height: "100%" }}
            src={backgroundPath}
            alt="backgound"
          />
          <img
            style={{ position: "absolute", left: 0, zIndex: 1, height: "100%" }}
            src={earPath}
            alt="ears"
          />
          <img
            style={{ position: "absolute", left: 0, zIndex: 2, height: "100%" }}
            src={neckPath}
            alt="neck"
          />
          <img
            style={{ position: "absolute", left: 0, zIndex: 2, height: "100%" }}
            src={legPath}
            alt="leg"
          />
          <img
            style={{ position: "absolute", left: 0, zIndex: 3, height: "100%" }}
            src="/images/nose.png"
            alt="nose"
          />
          <img
            style={{ position: "absolute", left: 0, zIndex: 3, height: "100%" }}
            src={eyesPath}
            alt="eyes"
          />
          <img
            style={{ position: "absolute", left: 0, zIndex: 3, height: "100%" }}
            src={mouthPath}
            alt="mouth"
          />
          <img
            style={{ position: "absolute", left: 0, zIndex: 4, height: "100%" }}
            src={accessoriesPath}
            alt="accessories"
          />
          <img
            style={{ position: "absolute", left: 0, zIndex: 2, height: "100%" }}
            src={hairPath}
            alt="hair"
          />
        </div>
        <div className="col">
          <div className="row px-auto" style={{ height: "50%" }}>
            <h3 className="text-uppercase fs-3 fw-bold">
              Accessories the alpaca's
            </h3>
            <div className="row row-cols-3">
              {Object.keys(styles).map((category) => (
                <Button
                  onClick={() => {
                    handleOnStyleCategoryClick(category);
                  }}
                  key={category}
                  variant="outline-primary"
                >
                  {getStylesFromCategory(category).label}
                </Button>
              ))}
            </div>
          </div>
          <div className="row px-auto" style={{ height: "50%" }}>
            <h3 className="text-uppercase fs-3 fw-bold mt-5">Style</h3>
            <StyleButton
              onStyleClick={handleOnStyleChange}
              styleCategory={styleCategory}
            />
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <div className="d-flex justify-content-evenly">
            <Button
              onClick={() => {
                handleOnShuffleClick();
              }}
              variant="light"
            >
              <div className="d-flex gap-2">
                <i className="ri-shuffle-fill"></i>
                Random
              </div>
            </Button>
            <Button
              onClick={() => {
                handleOnDownloadClick();
              }}
              variant="light"
            >
              <div className="d-flex gap-2">
                <i className="ri-download-line"></i>
                Download
              </div>
            </Button>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default App;
