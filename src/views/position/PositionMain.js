/**
 * Created by huawei on 2017/4/13.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    ListView,
    RefreshControl,
    Image
} from 'react-native';
let  isRefreshing = false;
let {width,height} = Dimensions.get('window');
// 一些常量设置
let persImgWidth = 40;
var cols = 3;
var imgScrollWidth = (width - (persImgWidth+20)*2);
var cellW = (width - (persImgWidth+20)*2)/cols;
import {connect} from 'react-redux';

import Nav from '../../common/APPNavBar'
import {BorderBottomW,BorderBottomC,TitleBarBackGroundColor} from '../../common/APPConstant'

class PositionMain extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Nav
                    centerText="职位"
                />
            </View>
        );
    }



}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
    },

});
export default connect((state) => {
    return {UserReducer} = state;
})(PositionMain);
