var initialState = {
    productName: 'hashgesh.github.io',
};
export var appReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case '1': {
            return Object.assign({}, state, { productName: 'new Marp' });
        }
        default:
            return state;
    }
};
