import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {AddTodo} from "../../redux/state/todo/todoSlice";


const CreateTodo = () => {

    const Dispatch = useDispatch();

    const taskInput = useRef();

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-11 ">
                    <input ref={taskInput} type="text" placeholder="Task Name" className="form-control"/>
                </div>
                <div className="col-md-1">
                    <button onClick={()=>Dispatch(AddTodo(taskInput.current.value))} className="btn btn-primary">Add To Do</button>
                </div>
            </div>
        </div>
    );
};

export default CreateTodo;