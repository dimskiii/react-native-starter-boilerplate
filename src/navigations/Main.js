import React, {Component} from 'react';
import { View, Text } from 'react-native';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import Home from '../screens/Home';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import SplashScreen from 'react-native-splash-screen';

class Main extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        SplashScreen.hide()
    }
    render(){
        const MainStack = createStackNavigator();
        return(
            <MainStack.Navigator
                screenOptions={{    
                    headerShown: false,
                    gestureEnabled: true,
                    ...TransitionPresets.SlideFromRightIOS,
                }}
            >
                <MainStack.Screen name="Home" component={Home} />  
            </MainStack.Navigator>
        )
    }
}

const mapStateToProps = state => ({
  app: state.app,
});

const ActionCreators = Object.assign(
  {},
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);