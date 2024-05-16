import { defaultKeymap, history, historyKeymap } from "@codemirror/commands";
import { EditorView, keymap, lineNumbers } from "@codemirror/view";
import React from "react";
import ReactDOM from "react-dom/client";
import { DOCUMENT, setup } from "sketchzone";

function createAndMountInspector(root: HTMLDivElement, doc: DOCUMENT) {
  const reactRoot = ReactDOM.createRoot(root);
  reactRoot.render(
    React.createElement(() => {
      let videoId;
      if (doc.includes("Dancing Queen")) {
        videoId = "-sVB91NTa4A";
      } else if (doc.includes("I Will Survive")) {
        videoId = "6dYWe1c3OyU";
      } else if (doc.includes("Stayin Alive")) {
        videoId = "I_izvAbhExY";
      }

      const inner = videoId ? (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        >
        </iframe>
      ) : (
        <div>This ain't no disco</div>
      )

      return inner
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
    `Dancing Queen (ABBA)`,
    `I Will Survive (Gloria Gaynor)`,
    `Stayin Alive (The Bee Gees)`,
  ],
});
