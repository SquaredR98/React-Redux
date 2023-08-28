import { useReducer } from 'react';
import produce from 'immer';
import Button from '../components/Button';
import Panel from '../components/Panel';

const actionTypes = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  CHANGE_VALUE: 'change-value',
  ADD_VALUE: 'add-value'
}

const reducer = (state, action) => {

  switch(action.type) {
    case actionTypes.INCREMENT:
      state.count = state.count + 1;
      return;
    case actionTypes.DECREMENT:
      state.count = state.count - 1;
      return;
    case actionTypes.CHANGE_VALUE:
      state.valueToAdd = action.payload;
      return;
    case actionTypes.ADD_VALUE:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default:
      return;
  }
};

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });
  console.log(state);

  const increment = () => {
    dispatch({
      type: actionTypes.INCREMENT
    });
  };
  const decrement = () => {
    dispatch({
      type: actionTypes.DECREMENT
    })
  };
  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({
      type: actionTypes.CHANGE_VALUE,
      payload: value
    })
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: actionTypes.ADD_VALUE,
    })
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={(event) => handleSubmit(event)}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ''}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
