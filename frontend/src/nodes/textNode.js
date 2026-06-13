// textNode.js

import { useRef, useState, useEffect } from "react";
import { BaseNode } from "./BaseNode";
import { Position } from "reactflow";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [variables, setVariables] = useState(["input"]);
  const textareaRef = useRef(null);

  useEffect(() => {
    const regex = /\{\{([a-zA-Z_][a-zA-Z0-9_]*)\}\}/g;
    const matches = [...currText.matchAll(regex)];
    const varNames = matches.map((match) => match[1]);
    setVariables([...new Set(varNames)]);
  }, []);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setCurrText(newText);
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    const regex = /\{\{([a-zA-Z_][a-zA-Z0-9_]*)\}\}/g;
    const matches = [...newText.matchAll(regex)];
    const varNames = matches.map((match) => match[1]);
    setVariables([...new Set(varNames)]);
  };

  return (
    <BaseNode
      title="Text"
      handles={[
        {
          id: `${id}-output`,
          type: "source",
          position: Position.Right,
          style: {},
        },
        ...variables.map((varName, index) => ({
          id: `${id}-${varName}`,
          type: "target",
          position: Position.Left,
          style: { top: `${((index + 1) / (variables.length + 1)) * 100}%` },
        })),
      ]}
    >
      <div>
        <label>
          Text:
          <textarea
            ref={textareaRef}
            value={currText}
            onChange={handleTextChange}
          />
        </label>
      </div>
    </BaseNode>
  );
};
