import { useState } from 'react';
import './App.css';
import ToDoForm from './ToDoForm';
import ToDoHeader from './ToDoHeader';
import ToDoList from './ToDoList';
var items = [];
items.push({index:1,value:"Learn React",done:true});
items.push({index:2,value:"Learn C#",done:true});
items.push({index:3,value:"Learn C++",done:false});
function App() {

  const [toDoItems,setItems] = useState(items);

  function addItem(toDoItem){
    const newTodoItems = [
      {
        index: toDoItems.length + 1,
        value: toDoItem.newItemValue,
        done: false,
      },
      ...toDoItems, // Spread the existing items so that the new item is added at the beginning
    ];
    setItems(newTodoItems);
  }


  function RemoveItem(itemIndex){
    setItems(toDoItems.filter(i=>i.index !== itemIndex));
  }


  function changeStatus(itemIndex){
    var toDo = toDoItems.find(i => i.index === itemIndex);
    toDo.done = !toDo.done;
    setItems(toDoItems.filter((i)=>true));
  }

  return (
    <div className='container'>
        <ToDoHeader></ToDoHeader>
        <ToDoList toDoItems={toDoItems}  RemoveItem={RemoveItem} changeStatus={changeStatus}></ToDoList>
        <ToDoForm addItem={addItem}></ToDoForm>
    </div>
  );
}

export default App;
