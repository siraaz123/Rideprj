import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "REQUEST": return { status: "requested" };
    case "ACCEPT": return { status: "in-progress" };
    case "COMPLETE": return { status: "completed" };
    default: return state;
  }
}

export default function useRideReducer() {
  return useReducer(reducer, { status: "idle" });
}
