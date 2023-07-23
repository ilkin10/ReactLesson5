import React from 'react'
import ToDoListItem from './ToDoListItem';


export default function ToDoList({ toDoItems,RemoveItem,changeStatus }) {
    var items = toDoItems.map((item) => {
        return <ToDoListItem changeStatus={changeStatus} RemoveItem={RemoveItem} key={item.index} item={item} index={item.index}></ToDoListItem>
    })
    return (
        <div>
            <ul className='list-group'>{items}</ul>
        </div>
    )
}
