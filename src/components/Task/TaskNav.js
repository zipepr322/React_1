import React, {useState} from 'react'
import classNames from 'classnames'


export default function TaskNav({ todo, doneClick, spanCorrect, onBlurText , removeTodo}) {
    const [value, setValue] = useState(todo.title);

    const itemsStyle= {
        div: {
            marginTop:'.7rem',
            width: '80%'
        },
    };

    // let classes =[];
    //
    // if (todo.completed){
    //     classes.push('done')
    // }

    return(


        <div style={itemsStyle.div} className='d-flex align-items-center justify-content-between'>
            <div className={`d-flex`}>
                <button className={`btn btn-danger`} onClick={ ()=> removeTodo(todo.id) }>&times;</button>
                <button className={`btn btn-success`} onClick={()=> doneClick(todo,value)}>&#128504;</button>
            </div>
            <div style={{display: todo.visible, textAlign: 'center', width: '90%', wordWrap:'break-word'}}
                 className={classNames({'done': todo.completed})}
                 onClick={() => spanCorrect(todo, value)}
            >{todo.title}
            </div>
            <input
                   value={value}
                   type="text"
                   style={{display: todo.invisible,width:'100%',textAlign:'center'}}
                   onChange={(event)=>setValue(event.target.value)}
                   onBlur={()=>onBlurText(value, todo)}
            />
        </div>

    )
}
// getDate(todo.date) `${todo.date}`}


