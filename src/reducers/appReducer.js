const initialState = {
  productName: 'hashgesh.github.io',
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case '1': {
      return Object.assign({}, state, { productName: 'new Marp' });
    }
    default:
      return state;
  }
};
