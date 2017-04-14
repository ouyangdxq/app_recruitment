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
    TextInput,
    Image
} from 'react-native';
import {connect} from 'react-redux';
import Nav from '../../common/APPNavBar';
import BaseComponent from '../../common/BaseComponent';
import Button from 'react-native-button'
import {BorderBottomW,BorderBottomC,AppMainColor,AppBGColor,MainTextColor,Space,FontSize18,SubTextColor} from '../../common/APPConstant'

class CompanyMain extends BaseComponent {
    constructor(props) {
        super(props);

        this.state = {
            Info:{
                name:'',
                job:'',
                Email:''
            }
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Nav
                    centerText="我的信息"
                    leftImage="nav_arrow_left"
                    leftOnClick={()=>{this.props.navigator.pop()}}
                    rightText="下一步"
                    rightTextOnClick={()=>{this.props.navigator.pop()}}
                />
                <ScrollView
                    style={{flex:1}}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{alignItems:'center',padding:18}}>
                        <Image source={{uri:'test'}}
                               style={{
                                   width: 66,
                                   height: 66,
                                   borderRadius: 33
                               }}/>
                        <Text style={{fontSize:13,color:MainTextColor,marginTop:7}}>请上传你的头像</Text>
                    </View>
                    {this._renderItem(this.state.Info,'name','姓名','请填写')}
                    {this._renderItem(this.state.Info,'job','职位','请填写')}
                    <View style={{height:10}} />
                    {this._renderItem(this.state.Info,'Email','工作邮箱','请填写接受简历的邮箱')}
                    <Button
                        containerStyle={styles.ButtonBGStyle}
                        onPress={()=> this._next()}
                        >
                        <Text style={styles.ButtonTextStyle}>下一步</Text>
                    </Button>
                </ScrollView>
            </View>
        );
    }

    _next()
    {

    }
    _renderItem(Info,key,title,inputHolder)
    {
        return(
            <View style={styles.ItemStyle}>
                    <Text style={{color:MainTextColor,fontSize:FontSize18}}>{title}</Text>
                    <TextInput
                        style={styles.TextInputStyle}
                        underlineColorAndroid = 'transparent'
                        numberOfLines={1}
                        placeholder={inputHolder}
                        defaultValue={Info[key]}
                        onChangeText={(text) => {
                            if(Info!=undefined&&key!=undefined)
                                Info[key]=text;}}
                    />
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: AppBGColor,
    },
    ItemStyle:{
        backgroundColor:'white',
        minHeight:56,
        flexDirection: 'row',
        alignItems:'center',
        paddingTop:Space,
        paddingBottom:Space,
        paddingLeft:Space,
        borderBottomColor:'#e5e5e5',
        borderBottomWidth:1,
        justifyContent:'space-between'
    },
    TextInputStyle:
        {
            flex:1,
            fontSize:FontSize18,
            marginLeft:Space,
            marginRight:Space,
            textAlign:'right'
        },
    ButtonStyle:{

    },
    ButtonBGStyle: {
        marginTop:70,
        padding: Space-2,
        marginLeft:Space,
        marginRight:Space,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: AppMainColor,
        borderRadius: 4,
    },
    ButtonTextStyle: {
        fontSize: FontSize18 + 1,
        color: 'white'
    }
});
export default connect((state) => {
    return {UserReducer} = state;
})(CompanyMain);
