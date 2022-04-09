import  * as actions from "./actionTypes";


let lastId = 0

export default function reducer(state = [],action){
  
    switch(action.type){
        case actions.BUG_ADDED:
            return [...state,{
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }]
        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id)
        case actions.BUG_RESOLVED:
            return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved: true})

        default:
            return state

} }



// export default function reducer(state = [],action){
//     if(action.type === actions.BUG_ADDED){
//     return[
//         ...state,
//         {
//             id: ++lastId, 
//             description: action.payload.description,
//             resolved: false
//         }
//     ]}
//     else if (action.type === action.BUG_REMOVED)    {
//     return state.filter(bug => bug.id !== action.payload.id)

//     return actions.BUG_RESOLVED {
//         type: actions.BUG_RESOLVED,
//         payload: {
//             id: action.payload.id
//         }
//     }
//     return state;
//     }
// } 