const reducerFn = (state,{type,payload}) => {
    switch(type){
        case "ADD_TODO":
            return{
                ...state,
            todos:[...state.todos,{...payload}]
            }
        default:
             return {...state};
    }
}

class Store{
    constructor(reducerFn,initialState){
        this.reducer = reducerFn;
        this.state = initialState;
    }
    getState(){
        return this.state;
    }
    dispatch(action){
        this.state = this.reducer(this.state,action);
    }
}

const initialState ={
    counter:0,
    todos : [],
}

const store = new Store(reducerFn,initialState);

store.dispatch({type:"ADD_TODO",payload:{id:1,status:false,title:"Learn react"},});
store.dispatch({type:"ADD_TODO",payload:{id:2,status:false,title:"Learn angular"},});
store.dispatch({type:"ADD_TODO",payload:{id:3,status:false,title:"Learn typescript"},});
store.dispatch({type:"ADD_TODO",payload:{id:4,status:false,title:"Learn Vue"},});

console.log(store.getState());