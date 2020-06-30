import React, {Component} from 'react';
import { View, Text } from 'react-native';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import Login from '../screens/Login';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import SplashScreen from 'react-native-splash-screen';

class Auth extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        SplashScreen.hide()
    }
    render(){
        const AuthStack = createStackNavigator();
        return(
            <AuthStack.Navigator
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: true,
                    ...TransitionPresets.SlideFromRightIOS,
                }}
            >
                <AuthStack.Screen name="Auth" component={Login} />  
            </AuthStack.Navigator>
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

export default connect(mapStateToProps, mapDispatchToProps)(Auth);