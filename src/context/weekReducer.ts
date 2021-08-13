import { State, Action } from "./weekContext.type";

export const weekReducer = (state: State, action: Action): State => {
    switch(action.type) {
        case 'NEXT_WEEK': 
            return {
               ...state,
                // startOfWeek: action.payload.startOfWeek.add(7, "d").toDate().getDate(),
                // endOfWeek:  action.payload.startOfWeek.add(-7, "d").toDate().getDate(),
               
            }
        
        default:
            return state;
    }
}