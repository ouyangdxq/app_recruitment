/**
 * Created by huawei on 2017/2/24.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Platform,
    Animated
} from 'react-native';
var {width,height} = Dimensions.get('window');
let path = '../../common';
import {connect} from 'react-redux';

import Nav from '../../common/APPNavBar'
import {BorderBottomW,BorderBottomC,TitleBarBackGroundColor,DividingView} from '../../common/APPConstant'

class MineMain extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

        };
    }

    componentDidMount() {
    }
    //width:width*this.state.bounceValue,
    render() {
        return (
            <View style={styles.container}>

                <View style={{height:width/2,backgroundColor:TitleBarBackGroundColor,width:width,justifyContent:'flex-end',alignItems:'center'}}>
                    <Image source={{uri:'person'}} style={{width:width,height:width/2,position:'absolute',top:0,left:0,right:0,bottom:0}}/>
                    <View style={{opacity:0.5,position:'absolute',top:0,left:0,right:0,bottom:0,backgroundColor:'black'}}>

                    </View>
                    <Image source={{uri:'person'}} style={{width:width/6,height:width/6,borderRadius:width/6/2}}/>
                    <Text style={{color:'#FFFFFF',fontSize:15,marginTop:10,backgroundColor:'transparent'}}>
                        陈小小
                    </Text>
                    <Text style={{color:'#FFFFFF',fontSize:13,marginTop:10,marginBottom:20,backgroundColor:'transparent'}}>
                        爱创新,爱思考
                    </Text>
                    <TouchableOpacity style={{position:'absolute',right:10,top:30,padding:10}}>
                        <Text style={{color:'#FFFFFF',backgroundColor:'transparent'}}>
                            设置
                        </Text>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity
                    style={{width:width}}
                    onPress={this._myResume.bind(this)}
                >
                    <View style={styles.commonMineCellStyle}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <View style={{width:20,height:20,backgroundColor:'#eeeeee'}}/>
                            <Text style={styles.commonMineTextStyle}>我的简历</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'#FF4500'}}>待完善</Text>
                            <Image source={{uri:'icon_back'}} style={{width:15,height:15}}/>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{width:width,height:10,backgroundColor:'#eeeeee'}} />
                <TouchableOpacity
                    style={{width:width}}
                    onPress={this._savePositios.bind(this)}
                >
                    <View style={styles.commonMineCellStyle}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <View style={{width:20,height:20,backgroundColor:'#eeeeee'}}/>
                            <Text style={styles.commonMineTextStyle}>我收藏的职位</Text>
                        </View>
                        <Image source={{uri:'icon_back'}} style={{width:15,height:15}}/>
                    </View>
                </TouchableOpacity>
                <View style={{width:width,height:10,backgroundColor:'#eeeeee'}} />
                <TouchableOpacity
                    style={{width:width}}
                    onPress={this._nearbyWorks.bind(this)}
                >
                    <View style={styles.commonMineCellStyle}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <View style={{width:20,height:20,backgroundColor:'#eeeeee'}}/>
                            <Text style={styles.commonMineTextStyle}>附近的工作</Text>
                        </View>
                        <Image source={{uri:'icon_back'}} style={{width:15,height:15}}/>
                    </View>
                </TouchableOpacity>

            </View>

        );
    }

    //附近的工作
    _nearbyWorks(){

    }
    //收藏的职位
    _savePositios(){

    }
    //我的简历
    _myResume(){

    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#eeeeee',
    },
    commonMineCellStyle:{
        flexDirection:'row',
        borderBottomColor:BorderBottomC,
        borderBottomWidth:BorderBottomW,
        height:60,
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10,
        justifyContent:'space-between'
    },
    commonMineTextStyle:{
        color:'#333333',
        fontSize:15,
        marginLeft:10
    }

});
export default connect((state) => {
    return {UserReducer} = state;
})(MineMain);
