import { Button } from "react-bootstrap";

function Styles(props) {
  const renderStyles = () => {
    const styleList = [];
    for (const style of props.styles) {
      styleList.push(
        <Button
          onClick={() => props.onStyle(style.filename)}
          key={style}
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

export default Styles;
