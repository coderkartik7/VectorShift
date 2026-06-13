// apiCallNode.js
// Makes an HTTP request to an external API endpoint

import { useState } from "react";
import { BaseNode } from "./BaseNode";
import { Position } from "reactflow";

export const ApiCallNode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || "https://api.example.com");
  const [method, setMethod] = useState(data?.method || "GET");

  return (
    <BaseNode
      title="API Call"
      handles={[
        {
          id: `${id}-body`,
          type: "target",
          position: Position.Left,
          style: {},
        },
        {
          id: `${id}-response`,
          type: "source",
          position: Position.Right,
          style: {},
        },
      ]}
    >
      <div>
        <label>
          URL:
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <label>
          Method:
          <select value={method} onChange={(e) => setMethod(e.target.value)}>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
