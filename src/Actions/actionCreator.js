import { MOVE_NEXT_PAGE } from './actionsTypes'

let CurPageIndex = 0; //First Page
export const moveNextPage = () => ({
    type: MOVE_NEXT_PAGE,
    PageIndex: ++CurPageIndex
})
