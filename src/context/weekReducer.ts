import { State, Action } from "./weekContext.type";
import moment from "moment";

export const weekReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "NEXT_WEEK":
      return {
        ...state,
        startOfWeek: state.startOfWeek.clone().add(7, "d"),
        endOfWeek: state.startOfWeek.clone().add(13, "d"),
        month:
          state.startOfWeek.clone().add(7, "d").format("MMMM") ===
          state.startOfWeek.clone().add(13, "d").format("MMMM")
            ? state.startOfWeek.clone().add(7, "d").format("MMMM")
            : state.startOfWeek
                .clone()
                .add(-7, "d")
                .format("MMMM")
                .slice(0, 3) + " - "+
                state.startOfWeek.clone().add(13, "d").format("MMMM").slice(0, 3),
      };
    case "PREVIOUS_WEEK":
      return {
        ...state,
        startOfWeek: state.startOfWeek.clone().add(-7, "d"),
        endOfWeek: state.startOfWeek.clone().add(-1, "d"),
        month:
          state.startOfWeek.clone().add(-7, "d").format("MMMM") ===
          state.startOfWeek.clone().add(-1, "d").format("MMMM")
            ? state.startOfWeek.clone().add(-7, "d").format("MMMM")
            : state.startOfWeek
                .clone()
                .add(-7, "d")
                .format("MMMM")
                .slice(0, 3) + " - "+
              state.startOfWeek.clone().add(-1, "d").format("MMMM").slice(0, 3),
      };
      case "CURRENT_WEEK":
          return {
            ...state,
            year:  moment().year(),
            month:  moment().format("MMMM"),
            startOfWeek:  moment().startOf("week"),
            endOfWeek:  moment().endOf("week"),
            day:  moment().format('dddd'),
            date:  moment().date(),
          }
    default:
      return state;
  }
};
