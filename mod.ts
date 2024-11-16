export type Thing<Type extends string> = {
  type: Type;
};

export type Event = Thing<typeof typeEvent> & {
  name: string;
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
