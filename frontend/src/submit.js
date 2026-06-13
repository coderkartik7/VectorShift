// submit.js

import { shallow } from "zustand/shallow";
import { useStore } from "./store";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:8000/pipelines/parse", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nodes, edges }),
    });
    const data = await response.json();
    alert(
      `Pipeline Results:\nNodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nValid Pipeline (DAG): ${data.is_dag ? "Yes" : "No"}`,
    );
  };

  return (
    <button
      type="button"
      style={{
        background: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: "3px",
        color: "#fff",
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        fontWeight: "600",
        padding: "3px 14px",
        cursor: "pointer",
        letterSpacing: "0.5px",
        transition: "background 150ms ease",
      }}
      onClick={handleSubmit}
      onMouseEnter={(e) =>
        (e.currentTarget.style.background = "rgba(255,255,255,0.22)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.background = "rgba(255,255,255,0.12)")
      }
    >
      ▶ Run Pipeline
    </button>
  );
};
