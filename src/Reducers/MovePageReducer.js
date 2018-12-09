// if you want to show initial data :)
// const INITIAL_DATA =  [
//     {
//         id: 0,
//         text: 'Walk the Dog',
//     },
//     {
//         id:1,
//         text: 'learn Redux',

//     },
// ]

import { MOVE_NEXT_PAGE} from '../Actions/actionsTypes'

const movePageReducer = (state = 0, action) => {
    switch (action.type){
        case MOVE_NEXT_PAGE:
        return action.PageIndex;
        default:
        return state
    }
}

export default movePageReducer