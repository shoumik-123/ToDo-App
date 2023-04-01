import React from 'react';
import CreateTodo from "../components/todo/CreateTodo";
import TodoList from "../components/todo/TodoList";


const TodoPage = () => {
    return (
        <div className="todo-page-bg">
            <div className="container-fluid p-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-head bg-secondary">
                                <h3 className="my-5 mx-4 px-3">My ToDo App</h3>
                            </div>
                            <div className="card-body bg-light text-dark p-4">

                                <CreateTodo/>
                                <TodoList/>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default TodoPage;