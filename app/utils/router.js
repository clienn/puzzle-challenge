import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Home } from '../views/home';

const MainStack = createStackNavigator({
    "Puzzle Challenge": {
        screen: Home,
    },

});

const Navigation = createAppContainer(MainStack);

export { Navigation };