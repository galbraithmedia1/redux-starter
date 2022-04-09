import * as actions from './actionTypes'


export const bugAdded = description => ({
    type: actions.BUG_ADDED,
            payload: {
                description: "Bug1"
    
          }
})
export const bugResolved = id => ({
    type: actions.BUG_RESOLVED,
            payload: {
                resolved: "true"
    
          }
})


//   export default function bugAdded(description){
//       return {
//         type: actions.BUG_ADDED,
//         payload: {
//             description: "Bug1"

//       }}
//   }