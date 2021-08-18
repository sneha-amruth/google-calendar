

export type Months = "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December";

export type Events = {
    title: string,
    year: number,
    month: string,
    day: string,
    date: number,
    hour: string
}
export type State = {
    eventsList: Events[]
}

export type EventContextType = {
    eventState: State,
    eventDispatch: React.Dispatch<any>,
}

export type Action = 
            | { type: 'SET_EVENTS', payload: Events[]}
          
            
          