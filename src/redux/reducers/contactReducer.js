const initialState = [
  {
    id: 1,
    name: "John",
    email: "john@gmail.com",
    number: 1234567890,
  },
  {
    id: 2,
    name: "smith",
    email: "smith@gmail.com",
    number: 1234567891,
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [...state, action.payload];
    case "UPDATE_CONTACT":
      const updateId = action.payload.id;
      const updatedState = state.map((contact) => {
        if (contact.id === updateId) {
          return action.payload;
        }
        return contact;
      });
      return updatedState;
    case "DELETE_CONTACT":
      debugger;
      const updateState = state.filter(
        (contact) => contact.id !== action.payload.id
      );
      return updateState;
    default:
      return state;
  }
};

export default contactReducer;
