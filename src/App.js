import React from 'react';
import TodoList from "./Todo/TodoList";
import AddTodo from "./Todo/AddTodo";
import defaultTasksList from "../src/list"


function App() {

    const defaultList = JSON.parse(JSON.stringify(defaultTasksList));
    const [todos, setTodos]= React.useState(defaultList);

    const getDate=(value)=>{
        return new Date(value).toLocaleDateString()
    };



    const toggleTodo=(id,value)=> {
       const editedArr=todos.map(todo=>{
            if (todo.id === id){
                if(todo.invisible === 'none'){
                    todo.completed = !todo.completed;
                }
                if (todo.invisible === 'flex' && value === ''){
                    todo.invisible='none';
                    todo.visible='block';
                    todo.completed = false;
                }
                if (todo.invisible === 'flex' && value !== ''){
                    todo.invisible='none';
                    todo.visible='block';
                    todo.title=value;
                    todo.completed = false;
                }
            }
            return todo
        });
        setTodos(editedArr);
    };


    const removeTodo=(id)=> {
        const editedArr=todos.filter(todo=>todo.id !==id);
        setTodos(editedArr)
    };

    const addTodo=(title)=> {
        const newElem=[{
            title,
            id: Date.now(),
            completed:false,
            date: new Date().toLocaleDateString(),
            visible: 'block',
            invisible: 'none',
            dateVisible: false,
        }],
        editedArr= (newElem.concat(todos));
        setTodos(editedArr);
    };


    const onBlurText=(value, innerTodo)=> {
        const editedArr = todos.map(todo=>{
            if (todo.id === innerTodo.id && value.trim() !== ''){
                todo.title = value;
                todo.completed = true;
                todo.visible = 'block';
                todo.invisible = 'none';
                todo.date= new Date().toLocaleDateString();

            }
            if (todo.id !== innerTodo.id || value.trim() === ''){
                todo.visible='block';
                todo.invisible='none'
            }
            return todo
        });
        setTodos(editedArr)
    };


    const spanCorrect=(elem, value, event)=> {
        const editedArr= todos.map(todo=>{
            if (todo.id === elem.id && elem.visible==='block'){
                elem.visible='none';
                elem.invisible='flex';
            }
            if(todo.id !== elem.id && todo.visible ==='none'){
                todo.visible = 'block';
                todo.invisible = 'none'
            }
            return todo
        });
        setTodos (editedArr)
    };

    const dateSpanClick=(innerId)=> {
        const editedArr=todos.map(todo=>{
            if (todo.id === innerId && todo.dateVisible===false ){
                todo.dateVisible= !todo.dateVisible;
                // console.log(event.target.value)
            }
            if (todo.id !== innerId){
                todo.dateVisible=false;
            }
            return todo
        });
        setTodos (editedArr)
    };

   const dateSpanBlur=(innerTodo, event)=>{
       const editedArr=todos.map(todo=>{
           if (todo.id === innerTodo.id && event.target.value !== 'undefined' && event.target.value !== ''){
               todo.date = new Date(event.target.value).toLocaleDateString()
           }
           return todo
       });
       setTodos (editedArr)
    };

    const onFocusAddTodo=(event,value)=>{
        const editedArr=todos.concat([
            {
                title: value,
                id: Date.now(),
                completed:false,
                date: new Date().toLocaleDateString(),
                visible: 'block',

                invisible: 'none'
            }
        ]);
        if (event.key === 'Key'){
            setTodos(editedArr)
        }
    };

    const onBlurDateInput=(innerId,value)=>{
        const editedArr=todos.map(todo=>{
            if (innerId===todo.id){
                todo.dateVisible= !todo.dateVisible;
                todo.date=getDate(value);
                return todo
            }
            return todo
        });
        setTodos(editedArr)
    };

    const onClickDateInput=(innerId,value)=>{
        const editedArr=todos.map(todo=>{
            if (innerId !== todo.id){
                todo.dateVisible=false;
            }
            return todo
        });
        setTodos(editedArr);
    };


  return (

        <div className="App" >
            <h1>My Todo List</h1>
            <AddTodo onCreate={addTodo}  onFocusAddTodo={onFocusAddTodo}/>
            {todos.length
                ? (<TodoList todos={todos}
                             onToggle={toggleTodo}
                             onSpanCorrect={spanCorrect}
                             onBlurText={onBlurText}
                             dateSpanClick={dateSpanClick}
                             dateSpanBlur={dateSpanBlur}
                             onBlurDateInput={onBlurDateInput}
                             onClickDateInput={onClickDateInput}
                             removeTodo={removeTodo}
                             getDate={getDate}
                />)

                : (<h3>no todos!</h3>)}
        </div>
  );
}

export default App;
