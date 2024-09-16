import { Button } from "react-bootstrap";
import { getStylesFromCategory } from "../styles";

function StyleButton({ styleCategory, onStyleClick }) {
  const category = getStylesFromCategory(styleCategory);

  const renderStyles = () => {
    const styleList = [];
    for (const style of category.styles) {
      const filepath = category.imagePath + style.filename;
      styleList.push(
        <Button
          key={filepath}
          onClick={() => onStyleClick(styleCategory, filepath)}
          variant="outline-primary"
        >
          {style.label}
        </Button>
      );
    }
    return styleList;
  };
  return <div className="d-flex gap-3">{renderStyles()}</div>;
}

export default StyleButton;
