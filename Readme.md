# VectorShift Pipeline Editor

A node-based visual pipeline editor built with React, ReactFlow, and FastAPI. Drag, connect, and configure nodes to build AI pipelines — then validate them with a single click.

---

## Preview

> VS Code–inspired dark theme with color-coded nodes, dynamic handles, and real-time DAG validation.

---

## Features

### Part 1 — Node Abstraction

- `BaseNode` component acts as a reusable wrapper for all node types
- Accepts `title`, `handles`, and `children` as props — making new nodes trivial to create
- Refactored all 4 original nodes (Input, Output, LLM, Text) to use `BaseNode`
- 5 new nodes added to demonstrate abstraction:

| Node                | Purpose                                                  |
| ------------------- | -------------------------------------------------------- |
| **Prompt Template** | Define reusable system/user prompts for LLMs             |
| **API Call**        | Make HTTP requests to external endpoints                 |
| **Note**            | Add documentation/comments to your pipeline              |
| **Condition**       | Branch pipeline into true/false paths                    |
| **Transform**       | Apply data transformations (uppercase, JSON parse, etc.) |

### Part 2 — Styling

- Full **VS Code Dark** theme using CSS custom properties
- Each node type has a unique color accent and icon
- Minimap shows color-coded node dots matching their type
- VS Code–style layout: title bar → toolbar → canvas → status bar
- Styled handles, edges, controls, and selection states

### Part 3 — Text Node Logic

- **Auto-resize** — textarea grows in height as the user types
- **Variable detection** — typing `{{variableName}}` dynamically creates a new input handle on the left side of the node
- Supports multiple variables, removes duplicates, validates JS variable name format

### Part 4 — Backend Integration

- Submit button sends pipeline `nodes` and `edges` to the FastAPI backend via POST
- Backend calculates `num_nodes`, `num_edges`, and checks if the pipeline is a valid **DAG**
- DAG detection uses **DFS cycle detection** algorithm
- Results displayed in a user-friendly alert

---

## Tech Stack

**Frontend**

- React 18
- ReactFlow
- Zustand (state management)

**Backend**

- Python
- FastAPI
- Pydantic

---

## Getting Started

### Prerequisites

- Node.js
- Python 3.8+

### Frontend

```bash
cd frontend
npm install
npm start
```

Runs at `http://localhost:3000`

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Runs at `http://localhost:8000`

---

## Project Structure

```
├── frontend/
│   └── src/
│       ├── nodes/
│       │   ├── BaseNode.js          # Reusable node abstraction
│       │   ├── inputNode.js
│       │   ├── outputNode.js
│       │   ├── llmNode.js
│       │   ├── textNode.js
│       │   ├── promptTemplateNode.js
│       │   ├── apiCallNode.js
│       │   ├── noteNode.js
│       │   ├── conditionNode.js
│       │   └── transformNode.js
│       ├── App.js
│       ├── toolbar.js
│       ├── draggableNode.js
│       ├── ui.js
│       ├── submit.js
│       ├── store.js
│       ├── index.css
│       └── reactflow-overrides.css
└── backend/
    ├── main.py
    └── requirements.txt
```

---

## How to Use

1. **Drag** a node from the toolbar onto the canvas
2. **Connect** nodes by dragging from one handle to another
3. **Configure** each node using its form fields
4. In the **Text node**, type `{{variableName}}` to create dynamic input handles
5. Click **▶ Run Pipeline** in the status bar to validate your pipeline
6. An alert will show the number of nodes, edges, and whether it's a valid DAG

---

## DAG Validation

The backend uses **Depth First Search (DFS)** to detect cycles in the pipeline graph:

- Builds an adjacency list from the edges
- Tracks each node as `unvisited`, `visiting`, or `done`
- If a node is encountered while still being visited → cycle detected → not a DAG
- Returns `true` only if no cycles are found across all nodes

---

## Example Pipeline — AI Content Moderator

```
Input (userInput) ──→ Text node ({{userInput}} + {{topic}})
Input (topic) ──────→ Text node
Prompt Template ────→ LLM (system handle)
Text node ──────────→ LLM (prompt handle)
LLM ────────────────→ Condition
Condition (True) ───→ Transform → Output (Flagged)
Condition (False) ──→ Output (Approved)
Note ───────────────→ (documents the pipeline)
```

This pipeline demonstrates all 4 parts of the assessment in a single flow.
