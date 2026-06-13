// promptTemplateNode.js
// Lets users write a reusable prompt template with a named role (system/user)

import { useState } from "react";
import { BaseNode } from "./BaseNode";
import { Position } from "reactflow";

export const PromptTemplateNode = ({ id, data }) => {
  const [role, setRole] = useState(data?.role || "user");
  const [template, setTemplate] = useState(data?.template || "You are a helpful assistant.");

  return (
    <BaseNode
      title="Prompt Template"
      handles={[
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
          Role:
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="system">System</option>
            <option value="user">User</option>
          </select>
        </label>
        <label>
          Template:
          <input
            type="text"
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
          />
        </label>
      </div>
    </BaseNode>
  );
};
