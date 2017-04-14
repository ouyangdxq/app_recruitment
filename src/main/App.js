/**
 * Created by huawei on 2017/2/24.
 */
import React, { Component } from 'react';
import {
    Navigator,
    View,
    BackAndroid,
    StatusBar,
    Platform,
    StyleSheet,
    Text,
    Image,
    ActivityIndicator,
    Dimensions,
    Alert,
    ToastAndroid
} from 'react-native';
import {connect} from 'react-redux';
//引导页
import Splash from './APPSplash';
//app的主体部分(包含TabNavigator)
var {height,width} = Dimensions.get('window');
import Toast from 'react-native-root-toast';
class App extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        //是否显示黄色警告，发布时设为true，测试时设为false
        //console.disableYellowBox = true;
        console.disableYellowBox = false;
    }
    //组件挂载的时候调用
    componentDidMount(){

        if (Platform.OS === 'android') {

            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
        }
    }

    componentWillUnmount() {

        if (Platform.OS === 'android') {

            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
        }

    }
    onBackAndroid = () => {

        const nav = this.refs.navigator;
        if(nav==undefined)
            return false;
        const routers = nav.getCurrentRoutes();
        if (routers.length > 1) {
            const top = routers[routers.length - 1];
            if (top.ignoreBack || top.component.ignoreBack){
                // 路由或组件上决定这个界面忽略back键
                return true;
            }
            const handleBack = top.handleBack || top.component.handleBack;
            if (handleBack) {
                // 路由或组件上决定这个界面自行处理back键
                return handleBack();
            }
            // 默认行为： 退出当前界面。
            nav.pop();
            return true;
        }else {
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                //最近2秒内按过back键，可以退出应用。
                return false;
            }
            this.lastBackPressed = Date.now();
            Toast.show('再按一次退出应用');
            return true;
        }
}
componentWillReceiveProps(nextProps)
{

}

render() {
    return (
        <View style={{flex:1}}>
            <StatusBar
                barStyle='light-content'
                translucent={false}
                hidden={false}
            />
                <Navigator
                    ref="navigator"
                    initialRoute={{name: 'Splash', component: Splash}}
                    configureScene={()=>{
                        return  Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return (
                            <Component navigator = {navigator}  route = {route} {...route.passProps} />
                            )
                    }}
                />
        </View>
            )
    }
}

var styles = StyleSheet.create({

});

export default connect((state) => {
    return {UserReducer} = state;
})(App);
