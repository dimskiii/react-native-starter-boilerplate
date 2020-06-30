
import AsyncStorage from '@react-native-community/async-storage';
import RNFetchBlob from 'rn-fetch-blob'


import { strings } from '../locales/i18n';
import { checkAuth } from "./AuthFlow";

import { Toast } from 'native-base';
import * as RootNavigation from '../../RootNavigation.js';

import { Platform } from 'react-native'
import { store } from '../../index';

import { Modal } from '@ant-design/react-native'
import { Toast as Loader, Portal} from '@ant-design/react-native'

import { authStatus } from '../redux/actions/app';
import { resetNotification } from '../redux/actions/notification';
import { resetMessageList } from '../redux/actions/message';

export const storage = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    return JSON.parse(value)
  } catch (e) {
    alert('Failed to load data.')
  }
}


export const BACKEND_URL = '';
export const WEBSOCKET = '';

export const GOOGLE_MAP_API_URL = 'https://maps.googleapis.com/'
export const GOOGLE_TRANSLATE_API_URL = 'https://translation.googleapis.com/'
export const GOOGLE_API_TOKEN = ''
export const GOOGLE_WEB_CLIENT_ID = ''
export const IOS_CLIENT_ID = ''

export const fetchAPI = async (url, bodyValue, method, authentication) => {
    const retrieve = await storage('AUTH');
    const state = store.getState();

    let token = null;
    let Authorization = null;
    if(authentication){
        token = retrieve
        Authorization = 'Bearer '+token
    }
    const headers = {
        'Content-Type': 'application/json',
        Authorization,
    }
    const body = bodyValue ? bodyValue : null
    const params = {
        method: method,
        headers: headers,
        body
    }

    return fetch(url,params)
    .then((response) => {
        if(response.status === 401){
          Modal.alert('Opps!', 'Please login again.', [
            { text: 'OK', onPress: () => removeToken() },
          ]);
        }
        return response.json()
    })
    .catch((error) => {
        Toast.show({
            text: strings('something_went_wrong_text'),
            type: "default"
        })
    });
}

export const removeToken = () => {
    // Logout code if response 401
}

export const convertImage = (path, type) => {
  return new Promise((resolve, reject) => {
    const fs = RNFetchBlob.fs;
    let filename = path
    if (Platform.OS === 'ios') {
      filename = path.replace('file:', '')
    } else {
      filename = path
    }

    fs.readFile(filename, 'base64')
    .then((res) => {
      let data = null
      switch (type) {
        case 'video':
          data = 'video/mp4'
          break;
        case 'image':
          data = 'image/jpeg'
          break
        default:
          break;
      }
      resolve('data:'+data+';base64,'+res)
    })
    .catch((err) => {
        Toast.show({
            text: strings('something_went_wrong_text'),
            type: "default"
        })
    })
  })
} 

export const assetName = (path) => {
      let uri = null
      if(Platform.OS === 'ios'){
          const source = path;      
          const iosID = path.substring(5, 41);
          uri = `assets-library://asset/asset.${'mp4'}?id=${iosID}&ext=${'mp4'}`;
      }else{
          uri = path
      }
      return uri
}

export const arrayObjectIndexOf = (array, property, value) => array.map(o => o[property]).indexOf(value);