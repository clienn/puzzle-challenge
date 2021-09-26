import { GET_PUZZLE_REQUEST_SUCCESS } from "./actions";

const initialState = {
    grid: [],
    moves: 0,
    isComplete: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PUZZLE_REQUEST_SUCCESS: {
            const { grid, moves, isComplete } = action.payload;

            return {
                grid,
                moves,
                isComplete,
            };
        }

        default:
            return state;
    }
};

export { reducer };