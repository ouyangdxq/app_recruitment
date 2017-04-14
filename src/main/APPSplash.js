/**
 * Created by huawei on 2017/2/24.
 */
'use strict';

import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    InteractionManager,
    View,
    Text,
    StyleSheet,
    StatusBar,
    Platform
} from 'react-native';
import {connect} from 'react-redux';
import Toast from 'react-native-root-toast';
import SplashScreen from 'react-native-splash-screen'
import APPMain from './APPMain';


var {height, width} = Dimensions.get('window');
const gifImageUrl = 'http://f1.diyitui.com/3c/c4/57/3e/b7/d3/69/a7/88/9f/66/97/7d/ec/75/77.gif';
class Splash extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态

    }

    componentDidMount() {

        if(Platform.OS === 'android')
        {
            SplashScreen.hide();//关闭启动屏幕
            //this._setTime();
        }
        else if(Platform.OS === 'ios')
        {

            //this._setTime();
            //this._GoToAppMain();
        }
        this._GoToAppMain();
    }

    componentWillUnmount() {

        this.timer && clearTimeout(this.timer);
    }


    _setTime()
    {

        this.timer = setTimeout(()=>{
            this._GoToAppMain();
        }, 1);
    }

    render() {

        //const pageSource = Platform.OS === 'ios' ? require('./splash.gif') : { uri: 'file:///android_asset/splash.gif' };
        return (
            <View style={{flex: 1}}>

            </View>
        );
    }
/*{Platform.OS === 'ios' ?null:
 <Image
 source={{uri:'backgroundmine'}}
 //source={pageSource}
 style={styles.ImageStyle}
 //onLoadStart={(e) => this.setState({loading: true})}
 onLoad={() => this._setTime()}
 />
 }*/
    _GoToAppMain()
    {
        const  {navigator} = this.props;
        navigator.resetTo({
            component:APPMain,
            name :'APPMain',
        });


    }
}
const styles = StyleSheet.create({
    ImageStyle:{
        width:width,
        height:height,
        resizeMode:'stretch'
    }
});
export default connect((state) => {
    return {UserReducer} = state;
})(Splash);
