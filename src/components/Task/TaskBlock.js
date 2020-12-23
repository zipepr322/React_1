import React from 'react'
import TaskNav from "./TaskNav";
import TaskTime from "./TaskTime";

let styles = {
    ul:{
        listStyle:'none',
        marginRight: '5%',
        marginLeft: '1%',
        padding:0,
    }
};


export default function TaskBlock(props) {
    return(
        <div style={styles.ul}>

            {props.todos.map(todo=>{
                return <div key={todo.id} className={`d-flex align-items-center justify-content-between`}>
                            <TaskNav
                                todo={todo}
                                doneClick={props.onToggle}
                                spanCorrect={props.onSpanCorrect}
                                onBlurText={props.onBlurText}
                                removeTodo={props.removeTodo}
                            />
                            <TaskTime
                                todo={todo}
                                dateSpanClick={props.dateSpanClick}
                                dateSpanBlur={props.dateSpanBlur}
                                onBlurDateInput={props.onBlurDateInput}
                                onClickDateInput={props.onClickDateInput}
                                getDate={props.getDate}
                            />
                        </div>

            })}
        </div>
    )
}