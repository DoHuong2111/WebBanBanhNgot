import * as types from '../contraints/index';

var initState = [];

const product = (state = initState, action) => {
    switch (action.type)
    {
        case types.GET_ALL_PRODUCT:
            return [...state]
        case types.FETCH_PRODUCT:
            state = action.payload;
            return [...state];
        default :
            return [...state]
    }

}

export default product;