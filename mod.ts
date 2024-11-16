export type Thing = {
  type: string;
};

export type Event = Thing & {
  name: string;
  type: typeof typeEvent;
};

export function isEvent(maybeEvent: unknown): maybeEvent is Event {
  return typeof maybeEvent === "object" && maybeEvent !== null &&
    "type" in maybeEvent &&
    maybeEvent.type === typeEvent;
}

const typeEvent = "event";

export type Entity<T> = T & {
  id: string;
};
