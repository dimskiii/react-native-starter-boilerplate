import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { styles } from '../components/styles/Styles'
import { strings } from '../locales/i18n';

export default class Home extends Component {
    render() {
        return (
            <View style={[{flex: 1}, styles.alignItemsCenter, styles.justifyCenter]}>
                <Text> {strings('welcome')} </Text>
            </View>
        )
    }
}
