// draggableNode.js
export const DraggableNode = ({ type, label, icon, color }) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify({ nodeType }),
    );
    event.dataTransfer.effectAllowed = "move";
    event.target.style.opacity = "0.6";
  };

  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, type)}
      onDragEnd={(e) => (e.target.style.opacity = "1")}
      title={label}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        padding: "5px 10px",
        background: "var(--bg-elevated)",
        border: `1px solid var(--border-subtle)`,
        borderRadius: "var(--radius-sm)",
        cursor: "grab",
        userSelect: "none",
        transition:
          "background var(--transition), border-color var(--transition), box-shadow var(--transition)",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--bg-hover)";
        e.currentTarget.style.borderColor = color || "var(--border-focus)";
        e.currentTarget.style.boxShadow = `0 0 0 1px ${color || "var(--border-focus)"}22`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "var(--bg-elevated)";
        e.currentTarget.style.borderColor = "var(--border-subtle)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <span
        style={{
          width: "18px",
          height: "18px",
          borderRadius: "3px",
          background: `${color}22`,
          border: `1px solid ${color}55`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "10px",
          color: color,
          fontFamily: "var(--font-mono)",
          fontWeight: "600",
          flexShrink: 0,
        }}
      >
        {icon}
      </span>
      <span
        style={{
          fontSize: "11px",
          color: "var(--text-primary)",
          fontFamily: "var(--font-ui)",
          fontWeight: "500",
        }}
      >
        {label}
      </span>
    </div>
  );
};
