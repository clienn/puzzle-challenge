import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Home } from '../views/home';

const MainStack = createStackNavigator({
    Home: {
        screen: Home,
    }
});

const Navigation = createAppContainer(MainStack);

export { Navigation };