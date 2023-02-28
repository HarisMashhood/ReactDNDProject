import React, { useState } from 'react'
import Picture from './Picture';
import "../App.css";
import { useDrop } from 'react-dnd'
const PictureList = [
    {
        id: 1,
        url: 'https://wallpaperaccess.com/full/436168.jpg'
    },
    {
        id: 2,
        url: 'https://wallpapercave.com/wp/wp2914866.jpg'
    },
    {
        id: 3,
        url: 'https://wallpapercave.com/wp/uL5C0mY.jpg'
    }
]
const DragDrop = () => {
    const [board, setBoard] = useState([]);
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))
    const addImageToBoard = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id);
        setBoard((board) => [...board, pictureList[0]])
    }
    return (
        <>
            <div className='Pictures'>
                {
                    PictureList.map((picture) => {
                        return <Picture id={picture.id} url={picture.url} />
                    })
                }
            </div>
            <div className='Board' ref={drop}>
                {
                    board.map((picture) => {
                        return <Picture url={picture.url} id={picture.id} />
                    })
                }
            </div>
        </>
    )
}

export default DragDrop