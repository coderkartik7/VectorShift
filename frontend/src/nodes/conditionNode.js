// conditionNode.js
// Routes data down a true or false path based on a condition

import { useState } from "react";
import { BaseNode } from "./BaseNode";
import { Position } from "reactflow";

export const ConditionNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || "value > 0");

  return (
    <BaseNode
      title="Condition"
      handles={[
        {
          id: `${id}-input`,
          type: "target",
          position: Position.Left,
          style: {},
        },
        {
          id: `${id}-true`,
          type: "source",
          position: Position.Right,
          style: { top: "33%" },
        },
        {
          id: `${id}-false`,
          type: "source",
          position: Position.Right,
          style: { top: "67%" },
        },
      ]}
    >
      <div>
        <label>
          If:
          <input
            type="text"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          />
        </label>
        <div style={{ fontSize: "10px", display: "flex", justifyContent: "space-between" }}>
          <span>True ↑</span>
          <span>False ↓</span>
        </div>
      </div>
    </BaseNode>
  );
};
