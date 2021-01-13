const LOCALSTORAGE_KEY = "todo-app-todos-key";

const initialState = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || [];

const remainderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "create":
      return _create(state, action.payload);
    case "edit":
      return _edit(state, action.payload);
    case "toggle_complete":
      return _toggle(state, action.payload);
    case "delete":
      return _delete(state, action.payload);
    default:
      return state;
  }
};

export default remainderReducer;

const _create = (state, data) => {
  const newState = [data, ...state];
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(newState));
  return newState;
};

const _edit = (state, data) => {
  const index = state.findIndex((todo) => todo.id === data.id);
  state[index] = data;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(state));
  return [...state];
};

const _toggle = (state, id) => {
  const index = state.findIndex((todo) => todo.id === id);
  state[index].completed = !state[index].completed;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(state));
  return [...state];
};

const _delete = (state, id) => {
  const newState = state.filter((todo) => todo.id !== id);
  if (newState.length === 0) localStorage.removeItem(LOCALSTORAGE_KEY);
  else localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(newState));
  return newState;
};
