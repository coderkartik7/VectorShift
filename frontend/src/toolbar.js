// toolbar.js
import { DraggableNode } from "./draggableNode";

const NODE_META = {
  customInput: { label: "Input", icon: "→", color: "#4ec9b0" },
  llm: { label: "LLM", icon: "⬡", color: "#c586c0" },
  customOutput: { label: "Output", icon: "←", color: "#6a9955" },
  text: { label: "Text", icon: "T", color: "#dcdcaa" },
  promptTemplate: { label: "Prompt Template", icon: "✎", color: "#ce9178" },
  apiCall: { label: "API Call", icon: "⇄", color: "#007acc" },
  note: { label: "Note", icon: "§", color: "#858585" },
  condition: { label: "Condition", icon: "⋄", color: "#f44747" },
  transform: { label: "Transform", icon: "⟳", color: "#dcdcaa" },
};

export const PipelineToolbar = () => {
  return (
    <div
      style={{
        background: "var(--bg-surface)",
        borderBottom: "1px solid var(--border-subtle)",
        padding: "8px 12px",
        display: "flex",
        alignItems: "center",
        gap: "0",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontSize: "10px",
          fontFamily: "var(--font-mono)",
          color: "var(--text-muted)",
          textTransform: "uppercase",
          letterSpacing: "1.5px",
          marginRight: "16px",
          whiteSpace: "nowrap",
        }}
      >
        NODES
      </span>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "6px",
        }}
      >
        {Object.entries(NODE_META).map(([type, meta]) => (
          <DraggableNode
            key={type}
            type={type}
            label={meta.label}
            icon={meta.icon}
            color={meta.color}
          />
        ))}
      </div>
    </div>
  );
};
