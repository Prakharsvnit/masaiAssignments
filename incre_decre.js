const reducerFn = (state,{type,payload}) => {
    switch(type){
        case "ADD_COUNT": return{
            ...state,
            counter: state.counter + payload
        }
        case "SUB_COUNT": return{
            ...state,
            counter: state.counter - payload
        }
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

console.log(store.getState());

store.dispatch({type:"ADD_COUNT",payload:1})

console.log(store.getState());

store.dispatch({type:"SUB_COUNT",payload:1})

console.log(store.getState());