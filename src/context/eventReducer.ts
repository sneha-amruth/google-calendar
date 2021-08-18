import { State, Action } from "./eventContext.type";

export const eventReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_EVENTS":
      return {
        eventsList: action.payload
      };

    default:
      return state;
  }
};
