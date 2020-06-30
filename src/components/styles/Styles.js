 import { StyleSheet, Dimensions, Platform } from 'react-native'
 const { width } = Dimensions.get('window');

 export const colors = {
    white: '#fff',
    black: '#111',
}

 export const styles = StyleSheet.create({
    justifyCenter:{
        justifyContent: 'center'
    },
    alignItemsCenter: {
        alignItems: 'center'
    },
    alignEnd:{
        alignItems: 'flex-end'
    },
    alignStart:{
        alignItems: 'flex-start'
    },
    justifyStart:{
        justifyContent: 'flex-start'
    },
 })
  
 