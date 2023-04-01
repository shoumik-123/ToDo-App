import React from 'react';
import {useSelector} from "react-redux";
import {DeleteAlart} from "./DeleteListAlart";
import {EditAlart} from "./EditTodo";

const TodoList = () => {

    const todoItems = useSelector((state)=>state.todo.value)
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="my-5 p-2">
                        <table className="table table-responsive-lg m-1 text-dark">
                            <thead>
                            <tr className="mt-3">
                                <th>No</th>
                                <th>Task Name</th>
                                <th>Edit</th>
                                <th>Remove</th>
                            </tr>
                            </thead>



                            <tbody>


                            {
                                todoItems.map((item ,i)=>{
                                    if(item!= ""){
                                        return(
                                            <tr  className="" key={i.toString()}>

                                                <td>{i + 1}</td>
                                                <td>{item}</td>
                                                <td><button onClick={()=>{EditAlart(i,item)}} className="btn btn-sm btn-primary text-light">Edit</button></td>
                                                <td><button onClick={()=>{DeleteAlart(i)}} className="btn-sm btn btn-danger text-light">Remove</button></td>
                                            </tr>
                                        )
                                    }
                                })
                            }

                            </tbody>


                        </table>

                    </div>
                </div>
            </div>

            
        </div>
    );
};
export default TodoList;