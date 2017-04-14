/**
 * Created by huawei on 2017/2/27.
 */

'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Platform,   // 判断当前运行的系统
    Navigator
} from 'react-native';

var isDebuger = true;
var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;
var Space = 15;//控件间的间隔
//根据不同情况返回不同路径
//BottomWidth:0.7,
//BottomColor:'rgba(52,53,61,0.5)'cell线

var isDebugVersion = true;
const FontSize15 = 15;
const FontSize13 = 13;
const ItemMinHeight=50;
{/*红色背景*/ }
const TitleBarBackGroundColor = '#e24d4d';
const PlaceholderColor = '#c7c7cd';
//分割线
const BorderBottomC = '#e1e1e1';
const BorderBottomW = 1;
//分割线
var LineView = React.createClass({

    render() {
        var  marginLeftNumber  =    this.props.paddingLeft;
        return (<View style={[styles.lineStyle,this.props.style, {marginLeft:marginLeftNumber?marginLeftNumber:0 }]} />);
    }
});

var CustomTextInput = React.createClass({

    render() {
        return (
            <TextInput
                underlineColorAndroid = "transparent"
                placeholderTextColor={PlaceholderColor}
                {...this.props}
            />
        );
    }
});
//分割栏
var DividingView= React.createClass({
    render() {
        var  HeightNumber  =    this.props.height;
        return (<View style={[styles.lineStyle, {height:HeightNumber?HeightNumber:Space }]} />);
    }
});

const styles = StyleSheet.create({
    lineStyle:{
        height:1,
        backgroundColor: '#ededed'
    }

});


module.exports = {
    TitleBarBackGroundColor:TitleBarBackGroundColor,
    TitleBarHeight:Platform.OS === 'android'?48:64,
    PlaceholderColor:PlaceholderColor,
    FontSize15:FontSize15,
    FontSize13:FontSize13,
    screenWidth:screenWidth,
    screenHeight:screenHeight,
    CustomTextInput:CustomTextInput,
    LineView: LineView,
    ItemMinHeight:ItemMinHeight,
    Space: Space,
    DividingView:DividingView,
    //大部分标题字体大小
    XGNFontSize:13,
    //导航颜色QINIUURL
    XGNNaviColor:'rgba(241,154,180,1.0)',
    //字体颜色 分三种
    XGNTextColorDark:'#333333',
    XGNTextColorMidle:'#666666',
    XGNTextColorLight:'#999999',
    //分割线颜色
    XGNSplitlineColor:'#ededed',
    //分割段颜色
    XGNSegmentColor:'#F5F5F5',
    BorderBottomC:BorderBottomC,
    BorderBottomW:BorderBottomW,
};
