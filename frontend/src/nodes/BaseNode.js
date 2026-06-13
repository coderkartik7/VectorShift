// BaseNode.js
import { Handle } from "reactflow";

const NODE_STYLE = {
  Input: { icon: "→", color: "#4ec9b0" },
  Output: { icon: "←", color: "#6a9955" },
  LLM: { icon: "⬡", color: "#c586c0" },
  Text: { icon: "T", color: "#dcdcaa" },
  "Prompt Template": { icon: "✎", color: "#ce9178" },
  "API Call": { icon: "⇄", color: "#007acc" },
  Note: { icon: "§", color: "#858585" },
  Condition: { icon: "⋄", color: "#f44747" },
  Transform: { icon: "⟳", color: "#dcdcaa" },
};

export const BaseNode = ({ title, handles = [], children }) => {
  const meta = NODE_STYLE[title] || { icon: "◈", color: "#007acc" };

  return (
    <div
      style={{
        background: "var(--bg-elevated)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-md)",
        minWidth: "200px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
        fontFamily: "var(--font-ui)",
        overflow: "visible",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "6px 10px",
          borderBottom: `1px solid ${meta.color}33`,
          background: `${meta.color}11`,
          borderRadius: "var(--radius-md) var(--radius-md) 0 0",
        }}
      >
        <span
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "3px",
            background: `${meta.color}22`,
            border: `1px solid ${meta.color}66`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "9px",
            color: meta.color,
            fontFamily: "var(--font-mono)",
            fontWeight: "700",
            flexShrink: 0,
          }}
        >
          {meta.icon}
        </span>
        <span
          style={{
            fontSize: "11px",
            fontWeight: "600",
            color: meta.color,
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.3px",
            textTransform: "uppercase",
          }}
        >
          {title}
        </span>
      </div>

      <div
        style={{
          padding: "12px 14px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {children}
      </div>

      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={{
            width: "10px",
            height: "10px",
            background: meta.color,
            border: `2px solid var(--bg-elevated)`,
            borderRadius: "50%",
            ...handle.style,
          }}
        />
      ))}
    </div>
  );
};
