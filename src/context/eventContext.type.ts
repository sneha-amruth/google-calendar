export type Events = {
  title: string;
  year: number;
  month: string;
  day: string;
  date: number;
  hour: string;
};
export type State = {
  eventsList: Events[];
};

export type EventContextType = {
  eventState: State;
  eventDispatch: React.Dispatch<any>;
};

export type Action =
  | { type: "SET_EVENTS"; payload: Events[] }
  | {
      type: "GET_EVENTS";
      payload: { date: number; hour: string; month: string; year: number };
    };
