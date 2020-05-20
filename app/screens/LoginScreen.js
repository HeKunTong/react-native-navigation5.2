import React, { Component } from 'react';
import {
  StatusBar,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      account: '',
      password: '',
    };
  }

  onLogin = () => {
    const { navigation } = this.props;
    const { account, password  } = this.state;
    if (account === 'root' && password === 'root') {
      navigation.navigate('Tabs');
    } else {

    }
  };

  render() {
    const { account, password } = this.state;
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <StatusBar/>
        <KeyboardAvoidingView style={{flex: 1}} behavior='padding' keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} enabled>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <View style={{width: '100%', paddingLeft: 20, paddingRight: 20, marginBottom: 20}}>
              <View style={{width: '100%', height: 50, flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 16, marginRight: 10}}>账号</Text>
                <TextInput
                  style={{flex: 1}}
                  value={account}
                  secureTextEntry={false}
                  underlineColorAndroid='transparent'
                  clearButtonMode='while-editing'
                  onChangeText={(account) => this.setState({account})}
                />
              </View>
              <View style={{height: 1, backgroundColor: '#00bc0c'}}/>
            </View>
            <View style={{width: '100%', paddingLeft: 20, paddingRight: 20, marginBottom: 20}}>
              <View style={{width: '100%', height: 50, flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 16, marginRight: 10}}>密码:</Text>
                <TextInput
                  style={{flex: 1}}
                  value={password}
                  secureTextEntry={true}
                  underlineColorAndroid='transparent'
                  clearButtonMode='while-editing'
                  onChangeText={(password) => this.setState({password})}
                />
              </View>
              <View style={{width: '100%', height: 1, backgroundColor: '#00bc0c'}}/>
            </View>
            <View style={{width: '100%', paddingLeft: 20, paddingRight: 20, marginBottom: 20}}>
              <TouchableWithoutFeedback onPress={this.onLogin}>
                <View style={{ width: '100%', backgroundColor: '#00bc0c', justifyContent: 'center', alignItems: 'center', height: 50, borderRadius: 5}}>
                  <Text style={{color: '#fff', fontSize: 16}}>登录</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default LoginScreen;
