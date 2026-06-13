// App.js
import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
import "./index.css";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        background: "var(--bg-base)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "30px",
          background: "#323233",
          borderBottom: "1px solid var(--border-subtle)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontSize: "12px",
            color: "var(--text-secondary)",
            fontFamily: "var(--font-ui)",
            letterSpacing: "0.5px",
          }}
        >
          ⚡ VectorShift Pipeline Editor
        </span>
      </div>
      <PipelineToolbar />

      <div style={{ flex: 1, overflow: "hidden" }}>
        <PipelineUI />
      </div>

      <div
        style={{
          height: "36px",
          background: "var(--accent-blue)",
          borderTop: "1px solid #005f9e",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontSize: "11px",
            color: "#fff",
            fontFamily: "var(--font-mono)",
            opacity: 0.85,
          }}
        >
          Pipeline Editor v1.0
        </span>
        <SubmitButton />
        <span
          style={{
            fontSize: "11px",
            color: "#fff",
            fontFamily: "var(--font-mono)",
            opacity: 0.85,
          }}
        >
          ReactFlow + FastAPI
        </span>
      </div>
    </div>
  );
}

export default App;
