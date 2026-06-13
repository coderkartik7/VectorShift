// noteNode.js
// A comment/documentation node with no handles — just a sticky note on the canvas

import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const NoteNode = ({ id, data }) => {
  const [note, setNote] = useState(data?.note || "Add a note...");

  return (
    <BaseNode title="Note" handles={[]}>
      <div>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={3}
          style={{ width: "100%", resize: "none", fontSize: "12px" }}
        />
      </div>
    </BaseNode>
  );
};
