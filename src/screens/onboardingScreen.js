import {
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Text} from 'react-native-elements';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Alert} from 'react-native';
import {counterEvent} from 'react-native/Libraries/Performance/Systrace';

const data = [
  {
    backgroundColor: '#fff',
    image: require('../../assets/images/Illustartion.png'),
    title: 'Onboarding',
    subtitle: 'Done with React Native Onboarding Swiper',
    titleStyles: {color: 'red'}, // overwrite default color
  },
  {
    backgroundColor: '#fe6e58',
    image: require('../../assets/images/Illustration.png'),
    title: 'The Title',
    subtitle: 'This is the subtitle that sumplements the title.',
  },
  {
    backgroundColor: '#fe6e58',
    image: require('../../assets/images/pizza.png'),
    title: 'The Title',
    subtitle: 'This is the subtitle that sumplements the title.',
  },
];

const CustomButtons = () => {
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  //   useEffect(() => {
  //     // Ensure that scrollViewRef.current is set when the component mounts
  //     if (scrollViewRef.current) {
  //       scrollViewRef.current.scrollTo({x: 0, y: 0, animated: false});
  //     }
  //   }, [scrollViewRef]);

  const handleNextButtonPress = () => {
    if (scrollViewRef.current) {
      setCurrentIndex(counter => counter + 1);
      if (currentIndex <= data.length) {
        currentValue = currentIndex + 1;
        console.log('active', currentValue);
        console.log('currentState');
        scrollViewRef.current.scrollTo({
          animated: true,
          x: currentValue * widthPercentageToDP(100),
          y: 0,
        });
      }
    }
  };
  console.log('satfdasdft', currentIndex);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
      }}>
      <ImageBackground
        style={{flex: 1}}
        resizeMode="cover"
        source={require('../../assets/images/bg.png')}>
        <ScrollView
          ref={scrollViewRef}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          scrollEnabled={false}
          horizontal>
          {data.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  height: heightPercentageToDP('80%'),
                  width: widthPercentageToDP(100),
                }}>
                <View
                  style={{
                    marginTop: heightPercentageToDP(10),
                    height: heightPercentageToDP(50),
                  }}>
                  <Image
                    resizeMode="contain"
                    source={item.image}
                    style={{height: '100%', width: '100%'}}
                  />
                  <Text
                    style={{
                      color: '#000',
                      textAlign: 'center',
                      fontFamily: 'Avenir-Regular',
                      fontSize: 22,
                      fontStyle: 'normal',
                      fontWeight: 800,
                      // lineHeight: 1.31023,
                      // width: '30%',
                    }}>
                    {`${item.title}`}
                  </Text>
                  <View
                    style={{
                      alignItems: 'center',
                      marginTop: heightPercentageToDP(4),
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        width: '60%',
                        fontWeight: '400',
                      }}>
                      {item.subtitle}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
        {/* end */}
        <View
          style={{
            height: heightPercentageToDP('20%'),
            justifyContent: 'space-between',
            //backgroundColor: 'red',
          }}>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <TouchableOpacity
              onPress={() => {
                if (currentIndex == data.length - 1) {
                  Alert.alert('plesae navigate');
                } else {
                  handleNextButtonPress();
                }
              }}
              style={{
                width: widthPercentageToDP(40),
                padding: 20,
                alignItems: 'center',
                borderRadius: 10,
                backgroundColor: 'red',
              }}>
              <Text style={{color: 'white'}}>Next</Text>
            </TouchableOpacity>
          </View>
          {/* action */}
          {currentIndex <= data.length - 2 && (
            <View
              style={{
                height: heightPercentageToDP(10),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: widthPercentageToDP(3),
              }}>
              <Text style={{color: '#000', fontSize: 16}}>Skip</Text>
              <View style={{flexDirection: 'row'}}>
                {data.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        height: 10,
                        width: 10,
                        backgroundColor:
                          index === currentIndex ? 'red' : '#E6E6E6',
                        borderRadius: 50,
                        marginHorizontal: 2,
                      }}></View>
                  );
                })}
              </View>
              <View style={{height: 35, width: 35}}>
                <Image
                  source={require('../../assets/images/Frame.png')}
                  style={{height: '100%', width: '100%'}}
                />
              </View>
            </View>
          )}
        </View>
        {/* <View style={{height: heightPercentageToDP(80)}}></View> */}
        {/* <View
          style={{
            height: heightPercentageToDP(85),
          }}>
          <ScrollView style={{flex: 1}}></ScrollView>
        </View> */}
        {/* <ScrollView style={{flex: 1, backgroundColor: 'green'}}>
        <ImageBackground
          resizeMode="cover"
          source={require('../../assets/images/bg.png')}
          style={{
            flex: 1,
          }}>
          <Text>ahsdiasdgasdg</Text>
        </ImageBackground>
      </ScrollView> */}
        {/* <View
          style={{
            flex: 1,

            justifyContent: 'space-between',
          }}>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                width: widthPercentageToDP(40),
                padding: 20,
                alignItems: 'center',
                borderRadius: 10,
                backgroundColor: 'red',
              }}>
              <Text style={{color: 'white'}}>Next</Text>
            </TouchableOpacity>
          </View> */}
        {/* <View
            style={{
              height: heightPercentageToDP(10),
              flexDirection: 'row',
              backgroundColor: 'white',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{color: 'blue'}}>Actions</Text>
            <Text>Actions</Text>
            <Text>Actions</Text>
          </View>
        </View> */}
      </ImageBackground>
    </View>
  );
};

export default CustomButtons;
