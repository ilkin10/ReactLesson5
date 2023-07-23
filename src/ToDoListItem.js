import React from 'react'

export default function ToDoListItem({key1,item,index,RemoveItem,changeStatus}) {
    var todoClass = item.done ? "done" : "undone";
    var isDoneImg = item.done? "red":"green";

    function CloseClick(){
        RemoveItem(index);
    }

    function ChangeStatus(){
        changeStatus(index);
    }

    return (
        <li key={key1} className='list-group-item'>
            <div className={todoClass}>
                <span style={{cursor:"pointer"}}>
                    <img onClick={ChangeStatus} style={{ width: "15px", height: "15px" }} src={'../'+isDoneImg+".png"} alt='ok' />
                </span>
                <span style={{display:"inline-block",width:"50%"}}>
                    {item.value}
                </span>
                <span style={{cursor:"pointer"}}>
                    <img onClick={CloseClick} style={{ width: "15px", height: "15px" }} src='../x.png' alt='cancel' />
                </span>
            </div>
        </li>
    )
}
