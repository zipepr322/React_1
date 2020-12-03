import React, {useContext,useState} from 'react'
import Context from "../context";


export default function TodoItem({ todo, doneClick, spanCorrect, onBlurText , dateSpanClick, dateSpanBlur }) {
    let [value, setValue] = useState('');
    let itemsStyle= {
        li: {
            textAlign:'center' ,
            width:'70%'
        },
        div: {
            marginTop:'.7rem'
        },

        innerInput: {
            display: 'none'
        }
    };


    const { removeTodo }= useContext(Context);
    let classes =[];

    if (todo.completed){
        classes.push('done')
    }

    return(


        <div style={itemsStyle.div} className='d-flex'>
            <button className='btn btn-danger' onClick={ removeTodo.bind(null, todo.id)}>&times;</button>
            <button className='btn btn-success' onClick={()=> doneClick(todo.id)}>&#128504;</button>
            <li style={{display: todo.visible, textAlign: 'center', width: '70%'}}
                className={classes.join(' ')}
                onClick={() => spanCorrect(todo, value)}
            >{todo.title}
            </li>
            <input value={value}
                   type="text"
                   style={{display: todo.invisible, width:'70%'}}
                   onChange={(event)=>setValue(event.target.value)}
                   onBlur={()=>onBlurText(value, todo)}
            />
            <span onClick={(event)=>dateSpanClick(todo, event)}
                  onBlur={(event)=>dateSpanBlur(todo, event)}
            >{todo.date}
            </span>
        </div>

    )
}


