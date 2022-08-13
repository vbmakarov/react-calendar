import { makeAutoObservable } from "mobx";

class EventsStore {
  events = {
    8: {},
    9: {},
    10: {},
    11: {},
    12: {},
    13: {},
    14: {},
    15: {},
    16: {},
    17: {},
    18: {},
    19: {},
    20: {},
    21: {},
    22: {},
  };

  constructor() {
    makeAutoObservable(this);
  }

  addEvent(data, event) {
    this.events[data.hour] = { ...this.events[data.hour], [data.date]: event };
  }

  deleteEvent(event) {
    const data = JSON.parse(event);
    if (this.events[data.time][data.date]) {
      delete this.events[data.time][data.date];
    }
  }

  fetchEvents() {
    return this.events;
  }
}

export default new EventsStore();
