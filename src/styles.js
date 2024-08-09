const styles = {
  hair: {
    styles: [
      { label: "Default", filename: "default.png" },
      { label: "Curls", filename: "curls.png" },
      { label: "Short", filename: "short.png" },
      { label: "Bang", filename: "bang.png" },
      { label: "Elegant", filename: "elegant.png" },
      { label: "Quiff", filename: "quiff.png" },
    ],
    imagePath: "/images/hair/",
    label: "Hair",
  },
  ears: {
    styles: [
      { label: "Default", filename: "default.png" },
      { label: "Tilt Backward", filename: "tilt-backward.png" },
      { label: "Tilt Forward", filename: "tilt-forward.png" },
    ],
    imagePath: "/images/ears/",
    label: "Ears",
  },
  eyes: {
    styles: [
      { label: "Default", filename: "default.png" },
      { label: "Angry", filename: "angry.png" },
      { label: "Naughty", filename: "naughty.png" },
      { label: "Panda", filename: "panda.png" },
      { label: "Smart", filename: "smart.png" },
      { label: "Star", filename: "star.png" },
    ],
    imagePath: "/images/eyes/",
    label: "Eyes",
  },
  mouth: {
    styles: [
      { label: "Default", filename: "default.png" },
      { label: "Astonished", filename: "astonished.png" },
      { label: "Eating", filename: "eating.png" },
      { label: "Laugh", filename: "laugh.png" },
      { label: "Tongue", filename: "tongue.png" },
    ],
    imagePath: "/images/mouth/",
    label: "Mouth",
  },
  neck: {
    styles: [
      { label: "Default", filename: "default.png" },
      { label: "Bend Backward", filename: "bend-backward.png" },
      { label: "Bend Forward", filename: "bend-forward.png" },
      { label: "Thick", filename: "thick.png" },
    ],
    imagePath: "/images/neck/",
    label: "Neck",
  },
  leg: {
    styles: [
      { label: "Default", filename: "default.png" },
      { label: "Tilt Backward", filename: "tilt-backward.png" },
      { label: "Tilt Forward", filename: "tilt-forward.png" },
      { label: "Game Console", filename: "game-console.png" },
      { label: "Cookie", filename: "cookie.png" },
      { label: "Bubble Tea", filename: "bubble-tea.png" },
    ],
    imagePath: "/images/leg/",
    label: "Leg",
  },
  accessories: {
    styles: [
      { label: "Earings", filename: "earings.png" },
      { label: "Flower", filename: "flower.png" },
      { label: "Glasses", filename: "glasses.png" },
      { label: "Headphone", filename: "headphone.png" },
    ],
    imagePath: "/images/accessories/",
    label: "Accessories",
  },
  backgrounds: {
    styles: [
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
    ],
    imagePath: "/images/backgrounds/",
    label: "Backgrounds",
  },
};

function getStylesFromCategory(category) {
  if (!category) return [];
  return styles[category];
}

export { styles, getStylesFromCategory };
