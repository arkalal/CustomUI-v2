import React from "react";
import styles from "./Canvas.module.scss";

const CanvasElement = ({ element, onSelectElement }) => (
  <div
    className={element.className}
    style={element.styles}
    onClick={() => onSelectElement(element.id)}
  >
    {element.tag.toUpperCase()}
    {element.children.map((child) => (
      <CanvasElement
        key={child.id}
        element={child}
        onSelectElement={onSelectElement}
      />
    ))}
  </div>
);

const Canvas = ({ elements, onSelectElement }) => {
  return (
    <div className={styles.canvas}>
      {elements.map((element) => (
        <CanvasElement
          key={element.id}
          element={element}
          onSelectElement={onSelectElement}
        />
      ))}
    </div>
  );
};

export default Canvas;
