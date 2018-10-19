import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions';
import { Icon } from 'react-native-elements';

class MapScreen extends Component {
    static navigationOptions = {
        title: 'Map',
        tabBarIcon: ({ tintColor }) => { return <Icon name="my-location" size={25} color={tintColor}/>; }
    }

    state = {
        region: {
            longitude: -122,
            latitude: 37,
            longitudeDelta: 0.04,
            latitudeDelta: 0.09
        }
    }
    
    onRegionChangeComplete = (region) => {
        this.setState({ region })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <MapView
                region={this.state.region} 
                style={{ flex: 1 }}
                onRegionChangeComplete={this.onRegionChangeComplete}
                />
            </View>
        );
    }
}

export default connect(null, { fetchJobs })(MapScreen);
