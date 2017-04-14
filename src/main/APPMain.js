/**
 * Created by huawei on 2017/2/24.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform,   // 判断当前运行的系统test
    Navigator,

} from 'react-native';

/**-----导入外部的组件类------**/
import {connect} from 'react-redux';
import TabNavigator from 'react-native-tab-navigator';
//Layout.tabBarHeight是组件自定义的高度49
import Layout from '../../node_modules/react-native-tab-navigator/Layout';


import CompanyMain       from '../views/company/CompanyMain'
import MessageMain       from '../views/message/MessageMain'
import MineMain          from '../views/mine/MineMain'
import PositionMain          from '../views/position/PositionMain'
import {TitleBarBackGroundColor}     from '../common/APPConstant'

class APPMain extends Component {
    componentDidMount() {

    }
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.CanChangeTabNavigator=true;
        this.state = {
            selectedTab:'position'
        };
    }

    _setCanChangeTabNavigator(Can)
    {
        this.CanChangeTabNavigator=Can;
    }
    componentWillReceiveProps(nextProps)
    {

    }
    render(){
        return (
            <TabNavigator
                tabBarStyle={{ height: Layout.tabBarHeight+4,paddingBottom: 6,backgroundColor:'white' }}
                //tabBarShadowStyle={{width:0,height:0}}
            >
                <TabNavigator.Item
                    title="公司"
                    selected={this.state.selectedTab === 'company'}
                    selectedTitleStyle={styles.selectedTitleStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={{uri:'home'}} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri:'home1'}} style={styles.iconStyle}/>}
                    onPress={this._clickCompany.bind(this)}>
                    <CompanyMain {...this.props}/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    title="职位"
                    selected={this.state.selectedTab === 'position'}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={{uri:'message'}} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri:'message1'}} style={styles.iconStyle}/>}
                    selectedTitleStyle={styles.selectedTitleStyle}
                    onPress={this._clickPosition.bind(this)}>
                    <PositionMain {...this.props}/>
                </TabNavigator.Item>



                <TabNavigator.Item
                    title="消息"
                    selected={this.state.selectedTab === 'message'}
                    selectedTitleStyle={styles.selectedTitleStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={{uri:'home'}} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri:'home1'}} style={styles.iconStyle}/>}
                    onPress={this._clickMessage.bind(this)}>
                    <MessageMain {...this.props}/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    title="我的"
                    selected={this.state.selectedTab === 'mine'}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={{uri:'mine'}} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri:'mine1'}} style={styles.iconStyle}/>}
                    selectedTitleStyle={styles.selectedTitleStyle}
                    onPress={this._clickMine.bind(this)}>
                    <MineMain {...this.props}/>
                </TabNavigator.Item>
            </TabNavigator>

        );
    }

    _clickPosition() {
        this.setState({
            selectedTab:'position'
        })
    }


    _clickCompany() {
        this.setState({
            selectedTab:'company'
        })

    }

    _clickMessage() {
        this.setState({
            selectedTab:'message'
        })

    }

    _clickMine() {
        this.setState({
            selectedTab:'mine'
        })
    }
}

const styles = StyleSheet.create({
    iconStyle:{
        width: Platform.OS === 'ios' ? 25 : 20,
        height:Platform.OS === 'ios' ? 25 : 20
    },
    selectedTitleStyle:{
        color:TitleBarBackGroundColor
    }
});
export default connect((state) => {
    return {UserReducer} = state;
})(APPMain);
