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


        <div style={itemsStyle.div} className='d-flex align-items-center'>
            <button className='btn btn-danger' onClick={ ()=> removeTodo(todo.id) }>&times;</button>
            <button className='btn btn-success' onClick={()=> doneClick(todo,value)}>&#128504;</button>
            <div style={{display: todo.visible, textAlign: 'center', width: '70%', wordWrap:'break-word'}}
                className={classes.join(' ')}
                onClick={() => spanCorrect(todo, value)}
            >{todo.title}
            </div>
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
                : getDate(todo.date.split('.').reverse().join('-'))
            }
            </span>
        </div>

    )
}
// getDate(todo.date) `${todo.date}`}


