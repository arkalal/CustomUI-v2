"use client";

import React, { useState } from "react";
import styles from "./Home.module.scss";
import EditorPanel from "../EditorPanel/EditorPanel";
import Canvas from "../Canvas/Canvas";

const Home = () => {
  const [elements, setElements] = useState([]);

  const handleAddElement = (newElement) => {
    setElements([...elements, newElement]);
  };

  const handleUpdateElement = (id, key, value) => {
    setElements((prevElements) =>
      prevElements.map((el) => (el.id === id ? { ...el, [key]: value } : el))
    );
  };

  const handleSelectElement = (id) => {
    // logic for selecting element (if needed)
  };

  const handleGenerateCode = () => {
    const generateJSX = (element) => {
      const styleString = Object.entries(element.styles)
        .map(([key, value]) => `${key}: '${value}'`)
        .join(", ");
      const childrenJSX = element.children
        .map((child) => generateJSX(child))
        .join("\n");
      return `<${element.tag} className="${element.className}" style={{${styleString}}}>\n${childrenJSX}\n</${element.tag}>`;
    };

    const generateSCSS = (element) => {
      const styleString = Object.entries(element.styles)
        .map(([key, value]) => `${key}: ${value};`)
        .join("\n  ");
      const childrenSCSS = element.children
        .map((child) => generateSCSS(child))
        .join("\n");
      return `.${element.className} {\n  ${styleString}\n${childrenSCSS}\n}`;
    };

    const jsxCode = elements.map((el) => generateJSX(el)).join("\n");
    const scssCode = elements.map((el) => generateSCSS(el)).join("\n");

    alert(`JSX Code:\n${jsxCode}\n\nSCSS Code:\n${scssCode}`);
  };

  return (
    <div className={styles.container}>
      <EditorPanel
        onAddElement={handleAddElement}
        onUpdateElement={handleUpdateElement}
        elements={elements}
        onGenerateCode={handleGenerateCode}
      />
      <Canvas elements={elements} onSelectElement={handleSelectElement} />
    </div>
  );
};

export default Home;
