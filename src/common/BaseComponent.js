/**
 * Created by duanxiaoqi on 2017/1/20.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    Platform,   // 判断当前运行的系统test
    Dimensions
} from 'react-native';
var {height,width} = Dimensions.get('window');


class BaseComponent extends Component {

    // 构造
    constructor(props) {
        super(props);

    }



}

const styles = StyleSheet.create({

});

export default BaseComponent;