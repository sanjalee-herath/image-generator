import { Button } from "react-bootstrap";
import { getStylesFromCategory } from "../styles";

function StyleButton({ styleCategory, onStyleClick }) {
  const category = getStylesFromCategory(styleCategory);

  const renderStyles = () => {
    const styleList = [];
    const categoryStylesLength = category.styles.length;

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
    console.log(categoryStylesLength);
    return styleList;
  };
  return <div className="row row-cols-3">{renderStyles()}</div>;
}

export default StyleButton;
