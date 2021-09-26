import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
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

const HomeView = ({ moves, isComplete, getPuzzle }) => {
    useEffect(() => {
        getPuzzle();
    }, []);

    const reset = () => {
        getPuzzle();
    }

    return (
        <View>
            <Text style={ styles.textDisplay }>Moves: { moves }</Text>

            { 
                isComplete && 
                <Button
                    title="Play Again"
                    buttonStyle={styles.button}
                    onPress={() => reset() }
                />
            }
                
            <PuzzleGrid />
        </View>
    );
}

const styles = StyleSheet.create({
    textDisplay: {
        padding: 20,
        fontSize: 25,
    }
});

const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeView);

export { Home };