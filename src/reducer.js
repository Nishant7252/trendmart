let initialState={isLogin:"N",member:{},total:0,basket:[]};
export function appReducer(state=initialState,action)
{
    if(action.type=="setLogin")
    {
        return {...state,isLogin:action.value};
    }
    else if(action.type=="setMember")
    {
        return {...state,member:action.value};
    }
    else if(action.type=="setTotal")
    {
        let a=parseInt(state.total)+parseInt(action.value);
        return {...state,total:a};
    }
    else if(action.type=="setBasket")
    {
        return {...state,basket:[...state.basket,action.value]};
    }
    else
        return state;
}
/*
setLogin
setMember
setTotal
setBasket
*/