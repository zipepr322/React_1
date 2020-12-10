import React, {useState} from 'react'


export default function TodoItem({ todo, doneClick, spanCorrect, onBlurText , dateSpanClick, dateSpanBlur, onBlurDateInput, onClickDateInput, removeTodo, getDate }) {
    const [value, setValue] = useState(todo.title),
          [dateValue,setDateValue] = React.useState(new Date().toLocaleDateString().split('.').reverse().join('-'));

    const itemsStyle= {
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

    let classes =[];

    if (todo.completed){
        classes.push('done')
    }

    return(


        <div style={itemsStyle.div} className='d-flex'>
            <button className='btn btn-danger' onClick={ ()=> removeTodo(todo.id) }>&times;</button>
            <button className='btn btn-success' onClick={()=> doneClick(todo.id,value)}>&#128504;</button>
            <li style={{display: todo.visible, textAlign: 'center', width: '70%'}}
                className={classes.join(' ')}
                onClick={() => spanCorrect(todo, value)}
            >{todo.title}
            </li>
            <input value={value}
                   type="text"
                   style={{display: todo.invisible, width:'70%'}}
                   onChange={(event)=>setValue(event.target.value)}
                   onBlur={()=>onBlurText(value, todo)}/>

            <span onClick={(event)=>dateSpanClick(todo.id, event)}
                  onBlur={(event)=>dateSpanBlur(todo, event)}
            >{todo.dateVisible
                ? <input type="date"
                         onChange={(event) => setDateValue(event.target.value)}
                         value={dateValue}
                         onBlur={() => onBlurDateInput(todo.id, value)}
                         onClick={() => onClickDateInput(todo.id, value)}/>
                : getDate(todo.date)
            }
            </span>
        </div>

    )
}
// getDate(todo.date) `${todo.date}`}


