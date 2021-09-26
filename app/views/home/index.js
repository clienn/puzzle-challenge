import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { GET_PUZZLE_REQUEST } from '../../models/puzzle/actions';
import PuzzleGrid from './components/PuzzleGrid';
import { initPuzzleGrid } from '../../Helpers/index';

const mapStateToProps = (state, props) => {
    const { grid, moves, isComplete } = state.puzzle;

    return { grid, moves, isComplete };
};

const mapDispatchToProps = (dispatch, props) => ({
    getPuzzle: () => {
        dispatch({
            type: GET_PUZZLE_REQUEST,
            payload: {
                grid: initPuzzleGrid(),
                moves: 0,
                isComplete: false,
            }
        })
    }
});

const HomeView = ({ grid, moves, isComplete, getPuzzle }) => {
    useEffect(() => {
        getPuzzle();
    }, []);

    return (
        <View>
            <Text>{ moves }</Text>
            <PuzzleGrid />
        </View>
    );
}

const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeView);

export { Home };