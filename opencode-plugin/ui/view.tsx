import React, { useContext } from 'react';
import { AppContext } from './context';
import { App } from 'obsidian';

const useApp = (): App | undefined => {
    return useContext(AppContext);
};

export const GraphComponent = () => {
    const app = useApp();

    return (
        <div>
            <h2>Shared Brain Graph Visualization</h2>
            <p>Vault: {app?.vault.getName()}</p>
            <p>Graph data will be rendered here.</p>
        </div>
    );
};
