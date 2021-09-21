
const memeInitialState={
    memes:[],
    images:[]
}
function memeReducer(state=memeInitialState,action) {
    switch (action.type) {
        case 'ADD_MEMES':
            return {...state, memes:action.values}
        
        default:
            return state;
    }
}
let state=memeReducer(undefined,{type:'INIT'});
console.log(state );
state=memeReducer(state,{type:'ADD_MEMES',values:JSON.parse('[{"id":0,"name":"react fun","x":100,"y":420,"text":"React is fun","color":"pink","fontSize":40,"fontWeight":900,"italic":false,"underline":true,"imageId":0},{"id":1,"name":"react fun","x":100,"y":420,"text":"React of clients is not fun","color":"pink","fontSize":40,"fontWeight":900,"italic":false,"underline":true,"imageId":1}]')});
console.log(state );
