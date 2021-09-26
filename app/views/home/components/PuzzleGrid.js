import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableWithoutFeedback,
    Alert, 
} from 'react-native';
import { connect } from 'react-redux';
import { getCellZero, isGameover } from '../../../Helpers/index';
import { GET_PUZZLE_REQUEST } from '../../../models/puzzle/actions';

const mapStateToProps = (state, props) => {
    const { grid, moves, isComplete } = state.puzzle;

    return { grid, moves, isComplete };
};

const mapDispatchToProps = (dispatch, props) => ({
    updatePuzzle: (data) => {
        dispatch({
            type: GET_PUZZLE_REQUEST,
            payload: data
        })
    }
});

const PuzzleView = ({ grid, moves, isComplete, updatePuzzle }) => {
    const [cellZero, setCellZero] = useState(null);

    useEffect(() => {
        setCellZero(getCellZero(grid));
    }, [grid]);

    const move = (x, y) => {
        if (!isComplete && cellZero) {
            const zx = cellZero.x;
            const zy = cellZero.y;

            const dx = Math.abs(x - zx);
            const dy = Math.abs(y - zy);

            if ((dx == 1 && dy == 0) || (dy == 1 && dx == 0)) {
                const newGrid = [...grid];
                [newGrid[y][x], newGrid[zy][zx]] = [newGrid[zy][zx], newGrid[y][x]];

                setCellZero({ x, y });

                const gameover = isGameover(newGrid);

                updatePuzzle({
                    grid: newGrid,
                    moves: moves + 1,
                    isComplete: gameover,
                });

                if (gameover) {
                    Alert.alert('You win!');
                }
            }
        }
    }

    return (
        <View style={[{padding: 20}]}>
            { grid.map((row, i) => (
            <View style={[styles.container, { flexDirection: "row" }]} key={ i }>
                { row.map((n, j) => (
                <TouchableWithoutFeedback onPress={() => { move(j, i) }} key={ n }>
                    <View style={ [n ? styles.cell : styles.zeroCell] }>
                        <Text style={n ? styles.cellFont : styles.zeroCellFont }>{ n ? n : '' }</Text>
                    </View>
                </TouchableWithoutFeedback>
                ))}
            </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    safeview: {
      flex: 1,
    },
  
    container: {
      margin: 1,
      padding: 0
    },
  
    cell: {
      flex: 3,
      backgroundColor: "#eee4da",
      aspectRatio: 1,
      margin: 1,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999
    },
  
    cellFont: {
      color: '#776e65',
      fontSize: 15,
      fontWeight: 'bold'
    },
  
    zeroCell: {
      flex: 3,
      aspectRatio: 1,
      margin: 1,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: -999,
      elevation: -999,
    },
  
    zeroCellFont: {
      color: '#f8f8f8'
    }
});

const PuzzleGrid = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PuzzleView);

export default PuzzleGrid;