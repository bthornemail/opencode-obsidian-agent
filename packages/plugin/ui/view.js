import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useEffect, useState } from 'react';
import { AppContext } from './context';
import { OpencodeAgentClient } from '../src/client'; // Assuming client is accessible
const useApp = () => {
    return useContext(AppContext);
};
// A mock client for now, in a real app this would be passed via context
const client = new OpencodeAgentClient();
export const GraphComponent = () => {
    const app = useApp();
    const [nodes, setNodes] = useState([]);
    const [isConnected, setIsConnected] = useState(false);
    useEffect(() => {
        // Connect to the agent runtime and fetch nodes
        const connectAndFetch = async () => {
            try {
                // @ts-ignore - Reading private vault config
                const configContent = await app.vault.adapter.read('agent-config.json');
                const config = JSON.parse(configContent);
                await client.connect(config.pluginEndpoint);
                setIsConnected(true);
                const fetchedNodes = await client.getAllNodes();
                setNodes(fetchedNodes);
            }
            catch (error) {
                console.error("Failed to connect or fetch nodes:", error);
            }
        };
        connectAndFetch();
        return () => {
            client.disconnect();
        };
    }, [app]);
    return (_jsxs("div", { style: { padding: '1rem' }, children: [_jsx("h2", { children: "Shared Brain Graph Visualization" }), _jsxs("p", { children: ["Vault: ", app?.vault.getName()] }), _jsxs("p", { children: ["Connection Status: ", isConnected ? 'Connected' : 'Disconnected'] }), _jsx("hr", {}), _jsxs("h3", { children: ["Processed Nodes (", nodes.length, ")"] }), _jsxs("div", { style: { overflowY: 'auto', maxHeight: '400px' }, children: [nodes.length === 0 && _jsx("p", { children: "No nodes processed yet. Save a formatted note in the 'notes' directory." }), _jsx("ul", { children: nodes.map(node => (_jsxs("li", { style: { marginBottom: '0.5rem', fontFamily: 'monospace', fontSize: '12px' }, children: [_jsx("strong", { children: "ID:" }), " ", node.nodeId.substring(0, 15), "...", _jsx("br", {}), _jsx("strong", { children: "Centroid:" }), " ", node.staticCentroid.substring(0, 15), "..."] }, node.nodeId))) })] })] }));
};
