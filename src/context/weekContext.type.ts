import * as moment from "moment";

export type Months = "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December";

export type State = {
    year: number,
    month: string,
    startOfWeek: moment.Moment,
    endOfWeek: moment.Moment,
    day: string,
    date: number,
    weekdates: number[]
}

export type WeekContextType = {
    weekState: State,
    weekDispatch: React.Dispatch<any>,
}

export type Action = 
            | { type: 'NEXT_WEEK'}
            | { type: 'PREVIOUS_WEEK'}
            | { type: 'CURRENT_WEEK'}
            
          