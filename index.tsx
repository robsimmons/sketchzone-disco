import { defaultKeymap, history, historyKeymap } from "@codemirror/commands";
import { EditorView, keymap, lineNumbers } from "@codemirror/view";
import React from "react";
import ReactDOM from "react-dom/client";
import { DOCUMENT, setup } from "sketchzone";

function createAndMountInspector(root: HTMLDivElement, doc: DOCUMENT) {
  const reactRoot = ReactDOM.createRoot(root);
  reactRoot.render(
    React.createElement(() => {
      const [numPresses, setNumPresses] = React.useState(0);

      return (
        <div className="sketchzone-rounded-inspector">
          <div>There is/are {doc.split("\n").length} line(s)</div>
          <div>You've pushed the button {numPresses} time(s).</div>
          <button onClick={() => setNumPresses(numPresses + 1)}>Press</button>
        </div>
      );
    })
  );
}

setup({
  createAndMountInspector,
  appName: "sketchzone-disco",
  infoUrl: "https://github.com/robsimmons/sketchzone-disco",
  codemirrorExtensions: [
    lineNumbers(),
    history(),
    EditorView.lineWrapping,
    keymap.of([...defaultKeymap, ...historyKeymap]),
  ],
  defaultEntries: [
    `Sketchzone on disco

Kinda like any other static site on disco, I guess?`,
    `Second tab`,
    `Third tab`,
  ],
});
