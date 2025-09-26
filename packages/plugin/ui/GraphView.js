import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from "react";
import { ItemView } from "obsidian";
import { createRoot } from "react-dom/client";
import { GraphComponent } from "./view";
import { AppContext } from "./context";
export const GRAPH_VIEW_TYPE = "graph-view";
export class GraphView extends ItemView {
    root = null;
    constructor(leaf) {
        super(leaf);
    }
    getViewType() {
        return GRAPH_VIEW_TYPE;
    }
    getDisplayText() {
        return "Shared Brain Graph";
    }
    async onOpen() {
        this.root = createRoot(this.contentEl);
        this.root.render(_jsx(StrictMode, { children: _jsx(AppContext.Provider, { value: this.app, children: _jsx(GraphComponent, {}) }) }));
    }
    async onClose() {
        this.root?.unmount();
    }
}
