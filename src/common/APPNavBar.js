/**
 * Created by huawei on 2017/2/27.
 */
import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
    Alert,
    TouchableOpacity,
    Platform
} from 'react-native';

import { Space,TitleBarHeight,FontSize15,TitleBarBackGroundColor} from '../common/APPConstant'


var TitleNavigatorBar = React.createClass({
    propTypes: {
        leftOnClick         :React.PropTypes.func,
        rightTextOnClick    :React.PropTypes.func,
        rightImageOnClick   :React.PropTypes.func,
        leftImage           :React.PropTypes.string,
        leftText            :React.PropTypes.string,
        rightImage          :React.PropTypes.string,
        rightText           :React.PropTypes.string,
        centerText          :React.PropTypes.string
    },
    // 初始化函数(变量是可以改变的,充当状态机的角色)
    getInitialState() {
        var doNotingFun = function () { };
        return {
            leftOnClick: this.props.leftOnClick || doNotingFun,
            rightTextOnClick: this.props.rightTextOnClick || doNotingFun,
            rightImageOnClick:this.props.rightImageOnClick || doNotingFun
        }
    },

    render() {

        return (
            <View style={TitleBarStyles.BarStyles}>
                {this.renderLeft(this.props.leftImage, this.props.leftText)}
                {this.renderCenterTitle(this.props.centerText)}
                {this.rendeRight(this.props.rightImage, this.props.rightText)}
            </View>
        );
    },


    renderLeft(leftIconName, leftText) {
        let leftIcon;
        let text;
        let TextpaddingLeft = Space-5;

        if (leftIconName !=undefined) {
            TextpaddingLeft = 0;
            leftIcon = (
                <View style={[TitleBarStyles.ImageBoxStyle]}>
                    <Image source={{ uri: leftIconName }} style={TitleBarStyles.ImageStyle} />
                </View>
            );
        }
        if (leftText != undefined)
            text = (<Text style={[TitleBarStyles.leftTextStyle, { paddingLeft: TextpaddingLeft }]}>{leftText}</Text>);

        return (
            <TouchableOpacity  style={[TitleBarStyles.cellStyle,{paddingTop:Space/2,paddingBottom:Space/2}]}  onPress={this.state.leftOnClick}>
                {leftIcon}
                {text}
            </TouchableOpacity>
        );
    },
    renderCenterTitle(TitleText) {
        let Title;
        if (TitleText != undefined) {
            Title = (<Text numberOfLines={1} style={TitleBarStyles.centerTextStyle}>{TitleText}</Text>);
        }
        return (
            <View style={[TitleBarStyles.cellStyle, {flex:2.6,justifyContent: 'center'}]} >
                { Title }
            </View >
        );
    },

    rendeRight(rightIconName, rightText) {
        let rightIcon;
        let text;
        let TextpaddingRight = Space-5;



        if (rightIconName != undefined) {
            TextpaddingRight = 0;
            rightIcon = (
                <TouchableOpacity style={TitleBarStyles.ImageBoxStyle} onPress={this.state.rightImageOnClick}>
                    <Image source={{ uri: rightIconName }} style={TitleBarStyles.ImageStyle} />
                </TouchableOpacity>);
        }

        if (rightText != undefined)
            text = (

                <TouchableOpacity  style={{paddingLeft:Space*2,paddingTop:Space/2,paddingBottom:Space/2}}  onPress={this.state.rightTextOnClick}>
                    <Text style={[TitleBarStyles.rightTextStyle, { paddingRight: TextpaddingRight }]}>{rightText}</Text>
                </TouchableOpacity>);


        return (
            <View style={[TitleBarStyles.cellStyle, {justifyContent:'flex-end' }]}   >
                { text }
                { rightIcon }
            </View>
        );
    }

});
//
const TitleBarStyles = StyleSheet.create({
    BarStyles: {
        flexDirection: 'row',
        paddingTop: Platform.OS === 'android'?0:15,
        justifyContent: 'space-between',
        alignItems:'center',
        backgroundColor: TitleBarBackGroundColor,
        height:TitleBarHeight

    },
    cellStyle: {
        flex:1.2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    centerTextStyle: {
        fontSize: FontSize15+3,
        justifyContent:'center',
        alignSelf:'center',
        color: 'white',
        textAlign: 'center',
        flex:1,
        //backgroundColor:'red'

    },
    leftTextStyle: {
        fontSize: Platform.OS === 'android'?FontSize15:FontSize15+1,
        justifyContent:'center',
        alignSelf:'center',
        color: 'white',
        textAlign: 'center',
        paddingRight:Space-5
    },
    rightTextStyle: {
        fontSize: Platform.OS === 'android'?FontSize15:FontSize15+1,
        justifyContent:'center',
        alignSelf:'center',
        color: 'white',
        //paddingLeft:Space,
        textAlign: 'center',
        //backgroundColor:'red'
    },
    ImageBoxStyle: {
        paddingLeft: Space-5,
        paddingRight: Space-5,
        justifyContent:'center',
        height:25
    },
    ImageStyle: {
        width: 16,
        height: 16,
        resizeMode: 'contain'
    }
});

module.exports = TitleNavigatorBar;