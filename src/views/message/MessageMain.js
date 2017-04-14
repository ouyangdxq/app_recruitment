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

class ReleaseMain extends Component {
    render() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let data = ['a','a','a',]
        return (
            <View style={styles.container}>
                <Nav
                    centerText="消息"
                />

                <ListView
                    style={ styles.container }
                    enableEmptySections={true}
                    dataSource={ ds.cloneWithRows(data) }
                    renderRow={this.renderRow.bind(this)}
                    onEndReached={ this._toEnd.bind(this) }
                    onEndReachedThreshold={10}

                    refreshControl={
                            <RefreshControl
                                refreshing={isRefreshing }
                                onRefresh={ this._onRefresh.bind(this) }
                                tintColor="gray"
                                colors={['#ff0000', '#00ff00', '#0000ff']}
                                progressBackgroundColor="gray"/>
                                }
                />


            </View>
        );
    }

    renderRow(dataSource,sectionID,rowID){
        var uri = rowID==0?'dy_icon_announcement':rowID==1?'dy_icon_comments':'dy_icon_lunch'
        return(
            <TouchableOpacity style={styles.rowStyle} activeOpacity={0.5}>
                { <View style={styles.titleViewStyle}>
                    <Image source={{uri:uri}} style={{width:50,height:50,borderRadius:4}}/>
                    <View style={styles.titleTextViewStyle}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={styles.titleStyle}>
                                学校公告
                            </Text>
                            <Text style={{color:'#999999',fontSize:12,paddingTop:8, paddingRight:10}}>2017/3/29</Text>
                        </View>

                        <Text style={styles.detailStyle} numberOfLines={1}>
                            张老师发布了一条信息张老师发布了一条信息张老师发布了一条信息张老师发布了一条信息张老师发布了一条信息张老师发布了一条信息张老师发布了一条信息
                        </Text>

                    </View>
                </View>}

            </TouchableOpacity>
        )
    }

    renderImg(){
        let testData = ['a','b','c','d','e']
        // 数组
        var allImage = [];

        for (var i = 0; i < testData.length; i++) {
            allImage.push(
                <TouchableOpacity style={styles.imagesStyle} key={i} onPress={this.renderImgClick.bind(this,testData[i])}>
                    <Image source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488792814&di=9beede031aa6cc354f006621fa64a0db&imgtype=jpg&er=1&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201508%2F19%2F20150819092146_viTkf.thumb.700_0.jpeg'}} style={{width:cellW-5,height:cellW-5}}/>
                </TouchableOpacity>
            );
        }
        // 返回数组
        return allImage;
    }

    _toEnd(){

    }

    _onRefresh(){

    }

    renderPushFoods() {
        this.props.navigator.push({
            component: FoodsRelease
        })
    }

    renderPushNotice() {
        this.props.navigator.push({
            component: NoticeRelease
        })
    }

    renderImgClick(name){
        alert(name);
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#eeeeee',
    },

    rowStyle:{
        padding:10,
        borderBottomWidth:BorderBottomW,
        borderBottomColor:BorderBottomC

    },
    titleViewStyle:{
        flexDirection:'row',
    },
    titleTextViewStyle:{
        paddingLeft:10,
        width:width -20 -40,
        //backgroundColor:'blue'
    },
    titleStyle:{
        color:'#333333',
        fontSize:15,
        paddingTop:8
    },
    detailStyle:{
        fontSize:13,
        marginTop:5,
        color:'#666666',
        paddingRight:10
    },
    imagesStyle:{
        width:cellW,
        height:cellW,
        justifyContent:'center',
        alignItems:'center',
    },
    imgScollStyle:{
        width:imgScrollWidth,
    },
    contentViewStyle:{
        // 设置主轴的方向
        flexDirection:'row',
        // 多个cell在同一行显示
        flexWrap:'wrap',
        // 宽度
        width:imgScrollWidth,
    },

});
export default connect((state) => {
    return {UserReducer} = state;
})(ReleaseMain);
