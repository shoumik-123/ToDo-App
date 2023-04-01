import Swal from "sweetalert2";
import store from "../../redux/store/store";
import {EditTodo} from "../../redux/state/todo/todoSlice";



export function EditAlart(i,item) {

    Swal.fire({
        text: "Update your task!",
        input: "text",
        inputValue : item,
        inputValidator :(value)=>{
            if(value){
                store.dispatch(EditTodo({index:i,task:value}))
            }
        }

    })

}