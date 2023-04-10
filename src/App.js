import React, { useCallback, useState } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, MiniMap, Background, Panel, Controls } from 'reactflow';
// import Xarrow, { useXarrow, xarrowPropsType, Xwrapper } from 'react-xarrows';
import 'reactflow/dist/style.css';
// import Draggable from 'react-draggable';




export default function App() {
  const [value, setValue] = useState(1);
  // const change = () => {
  //   console.log('Value is changed');
  //   setHaan(false);
  // }
  const initialNodes = [
    {
      id: '1', position: { x: 0, y: 0 }, data: {
        label: <div style={{ backgroundColor: '#f7ffe6', margin: '0px', padding: '0px' }}>
          <div style={{ backgroundColor: '#f7ffe6', color: 'black', padding: '2px 12px', border: '1px solid grey', borderRadius: '5px' }}>
            Node 1
          </div><br />
          <button style={{ backgroundColor: '#ffe6ad', border: '1px solid #ffe6ad', width: '100%' }} onClick={() => { setValue(value + 1) }}>Value is {value}</button>
          <br /><br />
          <div style={{ backgroundColor: '#f7ffe6', color: 'black', padding: '2px 12px', border: '1px solid grey', borderRadius: '5px' }}>
            Text For Node 1
          </div>
        </div>
      }, type: 'default', style: { width: 280, height: 120 }
    },
    {
      id: '2', position: { x: 200, y: 200 }, data: {
        label: <div style={{ backgroundColor: '#f7ffe6' }}>
          <div style={{ backgroundColor: '#f7ffe6', color: 'black', padding: '2px 12px', border: '1px solid grey', borderRadius: '5px' }}>
            Node 2
          </div><br />
          <button style={{ backgroundColor: '#ffe6ad', border: '1px solid #ffe6ad', width: '100%' }} onClick={() => { setValue(value + 1) }}>Value is {value}</button>
          <br /><br />
          <div style={{ backgroundColor: '#f7ffe6', color: 'black', padding: '2px 12px', border: '1px solid grey', borderRadius: '5px' }}>
            Text For Node 2
          </div>
        </div>
      }, type: 'default', animated: 'true', style: { width: 280, height: 120 }
    },
    {
      id: '3', position: { x: -200, y: 200 }, data: {
        label: <div style={{ backgroundColor: '#f7ffe6' }}>
          <div style={{ backgroundColor: '#f7ffe6', color: 'black', padding: '2px 12px', border: '1px solid grey', borderRadius: '5px' }}>
            Node 3
          </div><br />
          <button style={{ backgroundColor: '#ffe6ad', border: '1px solid #ffe6ad', width: '100%' }} onClick={() => { setValue(value + 1) }}>Value is {value}</button>
          <br /><br />
          <div style={{ backgroundColor: '#f7ffe6', color: 'black', padding: '2px 12px', border: '1px solid grey', borderRadius: '5px' }}>
            Text For Node 3
          </div>
        </div>
      }, type: 'default', animated: 'true', style: { width: 280, height: 120 }
    },
    {
      id: '4', position: { x: 400, y: 400 }, data: {
        label: <div style={{ backgroundColor: '#f7ffe6' }}>
          <div style={{ backgroundColor: '#f7ffe6', color: 'black', padding: '2px 12px', border: '1px solid grey', borderRadius: '5px' }}>
            Node 4
          </div><br />
          <button style={{ backgroundColor: '#ffe6ad', border: '1px solid #ffe6ad', width: '100%' }} onClick={() => {
            console.log('Node 4 clicked')
          }}>Value is {value}</button>
          <br /><br />
          <div style={{ backgroundColor: '#f7ffe6', color: 'black', padding: '2px 12px', border: '1px solid grey', borderRadius: '5px' }}>
            Text For Node 4
          </div>
        </div>
      }, type: 'default', animated: 'true', style: { width: 280, height: 120 }
    },
    {
      id: '5', position: { x: 600, y: 600 }, data: {
        label: <div style={{ backgroundColor: '#f7ffe6' }}>
          <div style={{ backgroundColor: '#f7ffe6', color: ' black', padding: '2px 12px', border: '1px solid grey', borderRadius: '5px' }}>
            Node 5
          </div><br />
          <button style={{ backgroundColor: '#ffe6ad', border: '1px solid #ffe6ad', width: '100%' }} onClick={() => { setValue(value + 1) }}>Value is {value}</button>
          <br /><br />
          <div style={{ backgroundColor: '#f7ffe6', color: 'black', padding: '2px 12px', border: '1px solid grey', borderRadius: '5px' }}>
            Text For Node 5
          </div>
        </div>
      }, type: 'default', animated: 'true', style: { width: 280, height: 120 }
    },
  ];
  const initialEdges = [{ id: 'e1-2', source: '1', target: '2', label: '1 to 2', type: 'step', animated: 'true' }];
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);



  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const [name, setName] = useState("");


  const addNote = () => {
    setNodes(e => e.concat({
      id: (e.length + 1).toString(),
      data: { label: `${name}` },
      position: { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }
    }))
  }


  /*********** */


  return (
    <>
      <div style={{ width: '100vw', height: '80vh', backgroundColor: 'lightgrey' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          fitViewOptions={{ padding: 0.4 }}
        >
          <MiniMap nodeColor={n => {
            if (n.type === 'input') return 'blue';
            return '#FFCC00';
          }} />
          <Controls />
          <Background variant={'cross'} color="grey" />
        </ReactFlow><br />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <input style={{ width: '20%', backgroundColor: '#f1f1f1', height: '35px', padding: '0px 20px', borderRadius: '10px', border: '1px solid grey' }} type="text" name='title' onChange={e => setName(e.target.value)} />
          <button style={{ color: 'white', backgroundColor: '#ffb366', padding: '0px 20px', height: '35px', border: '1px solid black', borderRadius: '10px' }} type='button' onClick={addNote}>Add Node</button>
          <h1>{value.name}</h1>
        </div>
      </div>
    </>
  );
}
