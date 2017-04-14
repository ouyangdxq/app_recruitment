/**
 * Created by huawei on 2017/2/24.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './APPStore';
import { MenuContext } from 'react-native-popup-menu';



import App from './App';

export default class BEIERRoot extends Component {
    render() {
        return (
            <Provider store = {store} >
                <MenuContext>
                    <App />
                </MenuContext>
            </Provider>
        )
    }
}