
export type Months = "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December";

export type State = {
    year: Number,
    month: String,
    startOfWeek: Object,
    endOfWeek: Object,
    day: String,
    date: Number
}

export type WeekContextType = {
    weekState: State,
    weekDispatch: React.Dispatch<any>,
}

export type Action = 
            | { type: 'NEXT_WEEK', payload: State}
            | { type: 'PREVIOUS_WEEK', payload: State}
          