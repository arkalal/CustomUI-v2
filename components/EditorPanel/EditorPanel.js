import React, { useState } from "react";
import styles from "./EditorPanel.module.scss";

const EditorPanel = ({
  onAddElement,
  onUpdateElement,
  elements,
  onGenerateCode,
}) => {
  const [selectedElementId, setSelectedElementId] = useState(null);

  const handleAddElement = (tag) => {
    const newElement = {
      id: Date.now(),
      tag,
      className: "",
      styles: {},
      children: [],
    };
    onAddElement(newElement);
    setSelectedElementId(newElement.id);
  };

  const handleUpdateElement = (key, value) => {
    const element = elements.find((el) => el.id === selectedElementId);
    if (key === "styles") {
      onUpdateElement(selectedElementId, key, { ...element.styles, ...value });
    } else {
      onUpdateElement(selectedElementId, key, value);
    }
  };

  return (
    <div className={styles.editorPanel}>
      <h2>Editor Panel</h2>
      <button onClick={() => handleAddElement("div")}>Add Div</button>
      <button onClick={() => handleAddElement("span")}>Add Span</button>
      <button onClick={() => handleAddElement("p")}>Add Paragraph</button>

      {selectedElementId && (
        <div>
          <h3>Edit Element</h3>
          <input
            type="text"
            placeholder="Class Name"
            onChange={(e) => handleUpdateElement("className", e.target.value)}
          />

          <h4>Styles</h4>
          <div>
            <label>Display</label>
            <select
              onChange={(e) =>
                handleUpdateElement("styles", { display: e.target.value })
              }
            >
              <option value="block">block</option>
              <option value="inline">inline</option>
              <option value="flex">flex</option>
            </select>
          </div>
          <div>
            <label>Width</label>
            <input
              type="text"
              onChange={(e) =>
                handleUpdateElement("styles", { width: e.target.value })
              }
            />
          </div>
          <div>
            <label>Height</label>
            <input
              type="text"
              onChange={(e) =>
                handleUpdateElement("styles", { height: e.target.value })
              }
            />
          </div>
          <div>
            <label>Background Color</label>
            <input
              type="text"
              onChange={(e) =>
                handleUpdateElement("styles", {
                  backgroundColor: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label>Margin</label>
            <input
              type="text"
              onChange={(e) =>
                handleUpdateElement("styles", { margin: e.target.value })
              }
            />
          </div>
          <div>
            <label>Padding</label>
            <input
              type="text"
              onChange={(e) =>
                handleUpdateElement("styles", { padding: e.target.value })
              }
            />
          </div>
          <div>
            <label>Border</label>
            <input
              type="text"
              onChange={(e) =>
                handleUpdateElement("styles", { border: e.target.value })
              }
            />
          </div>
          <div>
            <label>Color</label>
            <input
              type="text"
              onChange={(e) =>
                handleUpdateElement("styles", { color: e.target.value })
              }
            />
          </div>
          <div>
            <label>Font Size</label>
            <input
              type="text"
              onChange={(e) =>
                handleUpdateElement("styles", { fontSize: e.target.value })
              }
            />
          </div>
        </div>
      )}
      <button onClick={onGenerateCode}>Generate Code</button>
    </div>
  );
};

export default EditorPanel;
