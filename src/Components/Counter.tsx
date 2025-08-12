import React, { useReducer } from "react";
import { Link } from "react-router-dom";

const Counter = () => {
  type CounterState = {
    count: number;
    valueToAdd: number;
  };

  type CounterAction = {
    type: "Increment" | "Decrement";
  };

  type AddValueAction = {
    type: "Addvalue" | "SubmitAdd";
    payload: number;
  };

  const initialState = {
    count: 0,
    valueToAdd: 0,
  };

  const reducer = (
    state: CounterState,
    action: CounterAction | AddValueAction
  ) => {
    switch (action.type) {
      case "Increment":
        return { ...state, count: state.count + 1 };
      case "Decrement":
        return { ...state, count: state.count - 1 };
      case "Addvalue":
        return { ...state, valueToAdd: action.payload };
      case "SubmitAdd":
        return { ...state, count: action.payload, valueToAdd: 0 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = parseInt(e.target.value) || 0;
    console.log(value);
    // console.log(typeof value);
    // console.log(state.valueToAdd);
    dispatch({ type: "Addvalue", payload: value });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // console.log(state.count, state.valueToAdd);

    dispatch({ type: "SubmitAdd", payload: state.valueToAdd + state.count });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-lvh gap-3">
        <div>Current Count : {state.count}</div>
        <div className="flex ">
          <button
            className="p-2 m-3 bg-emerald-500 font-semibold cursor-pointer rounded-xl"
            onClick={() => {
              dispatch({ type: "Increment" });
            }}
          >
            Increment
          </button>
          <button
            className="p-2 m-3 bg-emerald-500 font-semibold cursor-pointer rounded-xl"
            onClick={() => {
              dispatch({ type: "Decrement" });
            }}
          >
            Decrement
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-center">
            <div className="flex space-x-2 items-center gap-2 ">
              <label>Add value:</label>
              <input
                className="border border-black p-2"
                type="number"
                value={state.valueToAdd || ""}
                onChange={handleChange}
              />
            </div>

            <button className="border rounded-xl p-2 m-3 bg-emerald-500 font-semibold cursor-pointer max-w-24">
              Add more
            </button>
          </div>
        </form>

        <Link to={"/"}>Back</Link>
      </div>
    </>
  );
};

export default Counter;
