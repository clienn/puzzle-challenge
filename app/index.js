import React from 'react';
import { View } from 'react-native';
import { Navigation } from './utils/router';

const App = ({}) => {
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <Navigation options={{ title: 'My home' }} />
        </View>
    );
};

export { App };