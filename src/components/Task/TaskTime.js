import React, {useState} from 'react'


export default function TaskTime ({todo, dateSpanClick, dateSpanBlur, onBlurDateInput, onClickDateInput, getDate}) {
    const [value, setValue] = useState(todo.title),
          [dateValue,setDateValue] = React.useState(new Date().toLocaleDateString().split('.').reverse().join('-'));


    return (
        <div style={{width:'15%', maxWidth:'200px', display:'flex', justifyContent:'center', marginTop:'.7rem',}}>
            <span onClick={(event)=>dateSpanClick(todo.id, event)}
                  onBlur={(event)=>dateSpanBlur(todo, event)}
            >{todo.dateVisible
                ? <input type="date"
                         onChange={(event) => setDateValue(event.target.value)}
                         value={dateValue}
                         onBlur={() => onBlurDateInput(todo.id, value)}
                         onClick={() => onClickDateInput(todo.id, value)}
                         style={{width:'85%'}}
                  />
                : getDate(todo.date.split('.').reverse().join('-'))
            }
            </span>
        </div>
    )
}
// getDate(todo.date/*.split('.').reverse().join('-')*/)