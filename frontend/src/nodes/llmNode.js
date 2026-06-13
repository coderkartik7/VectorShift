// llmNode.js

import { BaseNode } from "./BaseNode";
import { Position } from "reactflow";

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      title="LLM"
      handles={[
        {
          id: `${id}-system`,
          type: "target",
          position: Position.Left,
          style: { top: `${100 / 3}%` },
        },
        {
          id: `${id}-prompt`,
          type: "target",
          position: Position.Left,
          style: { top: `${200 / 3}%` },
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
        <span>This is a LLM.</span>
      </div>
    </BaseNode>
  );
};
