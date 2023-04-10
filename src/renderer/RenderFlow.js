import React from 'react'
import ReactFlow from 'react-flow-renderer';

const elements = [
    { id: '1', position: { x: 250, y: 5 }, data: { label: 'Node 1' } },
    { id: '2', position: { x: 100, y: 100 }, data: { label: <div>Node 2</div> } },
    { id: 'el-2', source: '1', target: '2', animated: true },
];

const RenderFlow = () => {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <ReactFlow elements={elements} />
        </div>
    )
}

export default RenderFlow