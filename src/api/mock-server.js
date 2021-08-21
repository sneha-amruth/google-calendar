import { createServer, Model, RestSerializer } from "miragejs";

export const mockServer = () => {
  createServer({
    serializers: {
      application: RestSerializer,
    },

    models: {
      events: Model,
    },

    routes() {
      this.timing = 1500;

      this.get("/api/events", (schema, request) => {
        return schema.events.all();
      });

      this.post("/api/events", (schema, request) => {
        let newEvent = JSON.parse(request.requestBody).events;
        return schema.events.create(newEvent);
      });
    },

    seeds(server) {
      server.create("event", {
        title: "Last9 round1",
        year: 2021,
        month: "August",
        day: "Sunday",
        date: 17,
        hour: "1:00 AM",
      });

      server.create("event", {
        title: "Friday event",
        year: 2021,
        month: "August",
        day: "Friday",
        date: 20,
        hour: "3:00 AM",
      });
      server.create("event", {
        title: "kickoff event",
        year: 2021,
        month: "August",
        day: "Friday",
        date: 20,
        hour: "3:00 AM",
      });
      server.create("event", {
        title: "Stand up",
        year: 2021,
        month: "August",
        day: "Sunday",
        date: 15,
        hour: "2:00 AM",
      });
      server.create("event", {
        title: "Project demo",
        year: 2021,
        month: "August",
        day: "Saturday",
        date: 21,
        hour: "7:00 AM",
      });
      server.create("event", {
        title: "Reflect",
        year: 2021,
        month: "August",
        day: "Saturday",
        date: 21,
        hour: "10:00 AM",
      });
      server.create("event", {
        title: "John's B'day",
        year: 2021,
        month: "August",
        day: "Friday",
        date: 20,
        hour: "2:00 AM",
      });
      server.create("event", {
        title: "Project demo",
        year: 2021,
        month: "August",
        day: "Saturday",
        date: 23,
        hour: "7:00 AM",
      });
      server.create("event", {
        title: "Standup",
        year: 2021,
        month: "August",
        day: "Saturday",
        date: 24,
        hour: "4:00 AM",
      });
      server.create("event", {
        title: "Kate's B'day",
        year: 2021,
        month: "August",
        day: "Friday",
        date: 25,
        hour: "2:00 AM",
      });
    },
  });
};
