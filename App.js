/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import { AppState, StatusBar, Platform, SafeAreaView} from 'react-native';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { navigationRef } from './RootNavigation';

import { Root } from "native-base";
import { Provider } from '@ant-design/react-native';
import { checkAuth } from "./src/helpers/AuthFlow";

import AsyncStorage from '@react-native-community/async-storage';

import Main from './src/navigations/Main.js';
import Auth from './src/navigations/Auth.js';

import { connect } from "react-redux";
import { appTheme, appLanguage } from './src/redux/actions/app';
import { bindActionCreators } from 'redux';

console.disableYellowBox = true;

const AppStack = createStackNavigator();

  class App extends Component {
    constructor(props){
      super(props)
      
      props.actions.appLanguage('en')
      props.actions.appTheme('light')
    }

    render(){

      const deepLinking = {
        prefixes: ['https://app.com', 'app://'],
        config: {
          Home: 'home',
        },
      };

      const {app} = this.props

      const App = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: app.theme === 'dark' ? '#222222' : '#FFF'
        },
      };

      return (
        <Root>
          <Provider>
            <SafeAreaView style={{flex: 1, backgroundColor: app.theme === 'dark' ? '#222222' : '#fff'}}>
              <StatusBar translucent barStyle={Platform.OS === 'android' ? 'default' : (app.theme === 'dark' ? "light-content" : "dark-content")} />
              <NavigationContainer theme={App} deepLinking={deepLinking} ref={navigationRef}>
                <AppStack.Navigator
                  screenOptions={{
                    gestureEnabled: false,
                    headerShown: false,
                    gestureDirection: 'horizontal', 
                    ...TransitionPresets.SlideFromRightIOS,
                  }}
                >
                  <AppStack.Screen name="Main" component={Main} />
                  
                </AppStack.Navigator>
              </NavigationContainer>
            </SafeAreaView>
          </Provider>
        </Root>
      );
    }

  };

  const mapStateToProps = state => ({
    app: state.app
  });

  const ActionCreators = Object.assign(
    {},
    {appTheme},
    {appLanguage}
  );

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
  });

  export default connect(mapStateToProps, mapDispatchToProps)(App);
