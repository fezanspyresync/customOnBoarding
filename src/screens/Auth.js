import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const Auth = () => {
  const [activeAuth, setActiveAuth] = useState(0);
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const passwordHandler = text => {
    setPassword(text);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="stretch"
        style={{flex: 1, marginTop: -40}}
        source={require('../../assets/images/bg.png')}>
        <View style={{flex: 1}}>
          <Image
            resizeMode="contain"
            source={require('../../assets/images/Illustration.png')}
            style={{height: '100%', width: '100%'}}
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#ffffff',
            marginTop: -heightPercentageToDP(31),
          }}>
          <View
            style={{
              flexDirection: 'row',

              marginTop: heightPercentageToDP(4),
            }}>
            <TouchableOpacity
              onPress={() => setActiveAuth(0)}
              style={{
                marginLeft: '10%',
              }}>
              <Text
                style={{
                  color: activeAuth == 0 ? '#F00' : '#000',
                  textAlign: 'center',
                  fontFamily: 'Avenir',
                  fontSize: 16,
                  fontStyle: 'normal',
                  fontWeight: '800',
                  lineHeight: 24,
                }}>
                Create Account
              </Text>
              {activeAuth == 0 ? (
                <View
                  style={{
                    width: '70%',
                    height: 2,
                    backgroundColor: 'red',
                    alignSelf: 'center',
                    marginTop: 5,
                  }}></View>
              ) : null}
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginLeft: '20%',
              }}
              onPress={() => setActiveAuth(1)}>
              <Text
                style={{
                  color: activeAuth == 1 ? '#F00' : '#000',
                  fontFamily: 'Avenir',
                  fontSize: 16,
                  fontStyle: 'normal',
                  fontWeight: '800',
                  lineHeight: 24,
                }}>
                Login
              </Text>
              {activeAuth == 1 ? (
                <View
                  style={{
                    width: '60%',
                    height: 2,
                    backgroundColor: 'red',
                    alignSelf: 'center',
                    marginTop: 5,
                  }}></View>
              ) : null}
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: heightPercentageToDP(3),
            }}>
            {activeAuth == 0 && (
              <Text
                style={{
                  color: '#000',
                  fontFamily: 'Avenir',
                  fontSize: 14,
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: 36,
                  marginLeft: widthPercentageToDP(8),
                }}>
                Full Name
              </Text>
            )}
            {activeAuth == 0 && (
              <TextInput
                placeholder="Full Name"
                placeholderTextColor={'#000'}
                style={{
                  color: '#000',
                  borderWidth: 2,
                  borderColor: '#F6F6F6',
                  width: '90%',
                  alignSelf: 'center',
                  borderRadius: 10,
                  paddingLeft: widthPercentageToDP(3),
                  color: '#3B3B3B', // Replace with your variable or default color
                  fontFamily: 'Avenir',
                  fontSize: 14,
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: 36, // Adjust based on your design
                }}
              />
            )}

            <Text
              style={{
                color: '#000',
                fontFamily: 'Avenir',
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 36,
                marginLeft: widthPercentageToDP(8),
              }}>
              Email address
            </Text>
            <TextInput
              placeholder="Email"
              placeholderTextColor={'#000'}
              style={{
                // color: '#000',
                borderWidth: 2,
                width: '90%',
                alignSelf: 'center',
                borderRadius: 10,
                borderColor: '#F6F6F6',
                paddingLeft: widthPercentageToDP(3),
                color: '#3B3B3B', // Replace with your variable or default color
                fontFamily: 'Avenir',
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 36, // Adjust based on your design
              }}
            />
            <Text
              style={{
                color: '#000',
                fontFamily: 'Avenir',
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 36,
                marginLeft: widthPercentageToDP(8),
              }}>
              Password
            </Text>
            <TextInput
              value={password}
              onChangeText={passwordHandler}
              secureTextEntry={true}
              placeholder="**** **** ****"
              placeholderTextColor={'#000'}
              style={{
                color: '#000',
                borderWidth: 2,
                borderColor: '#F6F6F6',
                width: '90%',
                alignSelf: 'center',
                borderRadius: 10,
                paddingLeft: widthPercentageToDP(3),
                color: '#3B3B3B', // Replace with your variable or default color
                fontFamily: 'Avenir',
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: '500',
                // Adjust based on your design
              }}
            />
            {activeAuth == 1 && (
              <Text
                style={{
                  width: '90%',
                  alignSelf: 'center',
                  textAlign: 'right',
                  fontFamily: 'Avenir',
                  fontSize: 12,
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: 36,
                  color: '#F00',
                }}>
                Forget Password?
              </Text>
            )}

            <TouchableOpacity
              onPress={() => {
                if (activeAuth == 0) {
                  setActiveAuth(1);
                } else {
                  navigation.replace('dashBoard');
                }
              }}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 15,
                backgroundColor: '#F00',
                width: '50%',
                alignSelf: 'center',
                borderRadius: 10,
                marginTop:
                  activeAuth == 0
                    ? heightPercentageToDP(5)
                    : heightPercentageToDP(3),
              }}>
              <Text
                style={{
                  color: '#FFF',
                  textAlign: 'center',
                  fontFamily: 'Avenir',
                  fontSize: 14,
                  fontStyle: 'normal',
                  fontWeight: '800',
                  lineHeight: 20, // Adjust based on your design
                }}>
                {activeAuth == 0 ? 'Sign Up' : 'Login'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: 15,
                backgroundColor: '#F4F4F4',
                width: '50%',
                alignSelf: 'center',
                borderRadius: 10,
                marginTop: heightPercentageToDP(2),
                flexDirection: 'row',
              }}>
              <View style={{height: 25, width: 25}}>
                <Image
                  resizeMode="cover"
                  source={require('../../assets/images/google.png')}
                  style={{height: '100%', width: '100%'}}
                />
              </View>
              <Text
                style={{
                  color: '#000',
                  textAlign: 'center',
                  fontFamily: 'Avenir',
                  fontSize: 14,
                  fontStyle: 'normal',
                  fontWeight: '800',
                  lineHeight: 20, // Adjust based on your design
                }}>
                Sign up with Google
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
