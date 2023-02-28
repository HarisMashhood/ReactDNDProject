import React from 'react'
import { useDrag } from 'react-dnd'
const Picture = ({ id, url }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    return (
        <div>
            <img ref={drag} src={url} alt="img" width="200px" style={{ border: isDragging ? "5px solid orange" : "0px" }} />
        </div>
    )
}

export default Picture