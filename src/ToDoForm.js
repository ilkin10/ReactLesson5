import React, { useState } from 'react'

export default function ToDoForm({addItem}) {

    const [text,setText] = useState("");


    function onSubmit(event){
        event.preventDefault();
        var newItemValue = text;
        if(newItemValue){
            addItem({newItemValue});
        }
    }

  return (
    <form className='form-inline' onSubmit={onSubmit}>
        <input onChange={e => setText(e.target.value)} type="text" className='fomr-control' placeholder='add a new todo...'></input>
        <button type='submit' className='btn btn-default'>Add</button>
    </form>
  )
}
