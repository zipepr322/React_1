import React from 'react'
import TodoItem from "./TodoItem";

let styles = {
    ul:{
        listStyle:'none',
        margin:0,
        padding:0
    }
};


export default function TodoList(props) {
    return(
        <ul style={styles.ul}>
            {props.todos.map(todo=>{
                return <TodoItem
                    todo={todo}
                    key={todo.id}
                    doneClick={props.onToggle}
                    spanCorrect={props.onSpanCorrect}
                    onBlurText={props.onBlurText}
                    dateSpanClick={props.dateSpanClick}
                    dateSpanBlur={props.dateSpanBlur}
                />
            })}
        </ul>
    )
}