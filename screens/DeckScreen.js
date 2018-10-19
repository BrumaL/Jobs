import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class DeckScreen extends Component {
    static navigationOptions = {
        title: 'Jobs',
        tabBarIcon: ({ tintColor }) => { return <Icon name="description" size={25} color={tintColor}/>; }
    }

    render() {
        return (
            <View>
                <Text>DeckScreen</Text>
                <Text>DeckScreen</Text>
                <Text>DeckScreen</Text>
                <Text>DeckScreen</Text>
                <Text>DeckScreen</Text>
                <Text>DeckScreen</Text>
                <Text>DeckScreen</Text>
            </View>
        );
    }
}

export default DeckScreen;
