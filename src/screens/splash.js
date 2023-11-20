import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('OnboardingScreen');
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      <View style={{flex: 0.4}}>
        <Image
          source={require('../../assets/images/Pattern.png')}
          style={{height: '100%', width: '100%'}}
        />
      </View>
      <View style={{flex: 0.6, alignItems: 'center'}}>
        <View
          style={{
            height: 200,
            width: 200,
            flexDirection: 'row',
            marginTop: -20,
          }}>
          <Image
            resizeMode="cover"
            source={require('../../assets/images/bike.png')}
            style={{height: '100%', width: '100%'}}
          />
        </View>
        <Text
          style={{
            fontSize: 50,
            fontFamily: 'Avenir-Regular',
            fontWeight: '800',
            textAlign: 'center',
            color: '#FF0000',

            marginLeft: 15,
          }}>
          Food Runs
        </Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
