import React from 'react';
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";


function App() {

    let [todos, setTodos]= React.useState([
        { id:1, completed: false, title:'Take out of the trash', date: new Date('10.12.14').toLocaleDateString(),visible: 'block', invisible: 'none'},
        { id:2, completed: false, title:'Walk the dog' , date: new Date('05.11.19').toLocaleDateString(),visible: 'block', invisible: 'none' },
        { id:3, completed: false, title:'Finish term paper' , date: new Date('10.12.18').toLocaleDateString(),visible: 'block', invisible: 'none' },
        { id:4, completed: false, title:'Watch Interstellar' , date: new Date('12.31.20').toLocaleDateString(),visible: 'block', invisible: 'none'},
        { id:5, completed: false, title:'Get food for dinner' , date: new Date('08.10.20').toLocaleDateString(),visible: 'block', invisible: 'none'},
        { id:6, completed: false, title:'Sleep', date: new Date('06.06.1666').toLocaleDateString(),visible: 'block', invisible: 'none' },
    ]);


    function toggleTodo(id) {
        setTodos (todos.map(todo=>{
            if (todo.id === id){
                todo.completed = !todo.completed
            }
            return todo
        })
        )
    }


    function removeTodo(id) {
        setTodos(todos.filter(todo=>todo.id !==id))
    }

    function addTodo(title) {
        setTodos(todos.concat([
            {
            title,
            id: Date.now(),
            completed:false,
            date: new Date().toLocaleDateString(),
            visible: 'block',
            invisible: 'none'
            }
            ]))
    }


    function onBlurText(value, innerTodo) {

        setTodos(todos.map(todo=>{
            if (todo.id === innerTodo.id && value.trim() !== ''){
                todo.title = value;
                todo.visible = 'block';
                todo.invisible = 'none';
                todo.date= new Date().toLocaleDateString()
            }
            if (todo.id !== innerTodo.id || value.trim() === ''){
                todo.visible='block';
                todo.invisible='none'
            }
            return todo
            })
        )
    }


    function spanCorrect(elem, value, event) {
        setTodos (todos.map(todo=>{
                if (todo.id === elem.id && elem.visible==='block'){
                    elem.visible='none';
                    elem.invisible='flex';
                }
                if(todo.id !== elem.id && todo.visible ==='none'){
                todo.visible = 'block';
                todo.invisible = 'none'
                }

                return todo
            })
        )
        }

        function dateSpanClick(innerTodo, event) {
            console.log(innerTodo);
            console.log(event);
            setTodos (todos.map(todo=>{
                    if (todo.id === innerTodo.id ){
                        todo.date = <input type="date" />;
                    }
                    // if (todo.id === innerTodo.id && typeof todo.date !=="string" && event.target.value !== null || event.target.value !== undefined){
                    //     todo.date = event.target.value;
                    // }
                    return todo
                })
            )
        }

       function dateSpanBlur(innerTodo, event){
           setTodos (todos.map(todo=>{
                   if (todo.id === innerTodo.id && event.target.value !== 'undefined' && event.target.value !== ''){
                       // new Date().toLocaleDateString()
                       todo.date = new Date(event.target.value).toLocaleDateString()
                   }
                   return todo
               })
           )
    }


    function onFocusAddTodo(event,value){
        if (event.key === 'Key'){
            setTodos(todos.concat([
                {
                    title: value,
                    id: Date.now(),
                    completed:false,
                    date: new Date().toLocaleDateString(),
                    visible: 'block',
                    invisible: 'none'
                }
            ]))
        }

    }


  return (
      <Context.Provider value={{ removeTodo }}>
        <div className="App" >
            <h1>My Todo List</h1>
            <AddTodo onCreate={addTodo}  onFocusAddTodo={onFocusAddTodo}/>
            {todos.length
                ? (<TodoList todos={todos} onToggle={toggleTodo} onSpanCorrect={spanCorrect} onBlurText={onBlurText}  dateSpanClick={dateSpanClick} dateSpanBlur={dateSpanBlur}/>)
                : (<h3>no todos!</h3>)}
        </div>
      </Context.Provider>
  );
}

export default App;
