// transformNode.js
// Applies a transformation to data (e.g. uppercase, parse JSON, extract field)

import { useState } from "react";
import { BaseNode } from "./BaseNode";
import { Position } from "reactflow";

export const TransformNode = ({ id, data }) => {
  const [transformType, setTransformType] = useState(data?.transformType || "uppercase");
  const [field, setField] = useState(data?.field || "");

  return (
    <BaseNode
      title="Transform"
      handles={[
        {
          id: `${id}-input`,
          type: "target",
          position: Position.Left,
          style: {},
        },
        {
          id: `${id}-output`,
          type: "source",
          position: Position.Right,
          style: {},
        },
      ]}
    >
      <div>
        <label>
          Type:
          <select
            value={transformType}
            onChange={(e) => setTransformType(e.target.value)}
          >
            <option value="uppercase">Uppercase</option>
            <option value="lowercase">Lowercase</option>
            <option value="trim">Trim</option>
            <option value="json_parse">Parse JSON</option>
            <option value="extract_field">Extract Field</option>
          </select>
        </label>
        {transformType === "extract_field" && (
          <label>
            Field:
            <input
              type="text"
              value={field}
              onChange={(e) => setField(e.target.value)}
              placeholder="e.g. data.name"
            />
          </label>
        )}
      </div>
    </BaseNode>
  );
};
