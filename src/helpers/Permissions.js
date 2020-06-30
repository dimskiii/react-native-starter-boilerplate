import { PermissionsAndroid, Platform } from "react-native";
import {requestMultiple, request, PERMISSIONS} from 'react-native-permissions';


export const galleryPermission = async () => {
  try {
    if(Platform.OS === 'ios'){
      const permission = await request(PERMISSIONS.IOS.PHOTO_LIBRARY)
      return permission
    }else{
      const permission = await PermissionsAndroid.requestMultiple(
        [
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ]
      )
      return permission
    }
    
   
  } catch (err) {
    return false
  }
}

export const locationPermissions = async () => {
  try {
    if(Platform.OS === 'ios'){
      requestMultiple([
                      PERMISSIONS.IOS.LOCATION_ALWAYS,
                      PERMISSIONS.IOS.LOCATION_WHEN_IN_USE, 
                    ])
    }else{
      PermissionsAndroid.requestMultiple(
        [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION]
      )
    }
    
   
  } catch (err) {
    return false
  }
};

export const cameraPermissions = async () => {
  try {
    if(Platform.OS === 'ios'){
      requestMultiple([PERMISSIONS.IOS.CAMERA])
    }else{
      PermissionsAndroid.requestMultiple(
        [PermissionsAndroid.PERMISSIONS.CAMERA,
        ]
      )
    }
  } catch (err) {
    return false
  }
};


