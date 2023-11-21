import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

const sliderData = [
  {image: require('../../assets/images/slider1.png')},
  {image: require('../../assets/images/slider2.png')},
  {image: require('../../assets/images/slider3.png')},
];

const DashBoard = () => {
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  //   const handleNextButtonPress = () => {
  //     console.log('asdygasdf');
  //     if (scrollViewRef.current) {
  //       if (currentIndex <= sliderData.length - 1) {
  //         currentValue = currentIndex + 1;
  //         console.log('VALUE', currentValue);

  //         scrollViewRef.current.scrollTo({
  //           animated: true,
  //           x: currentValue * widthPercentageToDP(100),
  //           y: 0,
  //         });

  //         if (currentValue > sliderData.length - 1) {
  //           setCurrentIndex(0);
  //         } else {
  //           setCurrentIndex(pres => pres + 1);
  //         }
  //       }
  //     }
  //   };

  const handleScrollEnd = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const screenWidth = widthPercentageToDP(100);
    const index = Math.round(contentOffsetX / screenWidth);
    console.log(index);
    setCurrentIndex(index);
  };

  //   useEffect(() => {
  //     setTimeout(() => {
  //       handleNextButtonPress();
  //     }, 3000);
  //   }, [currentIndex]);
  console.log(currentIndex);
  return (
    <View style={styles.container}>
      <View
        style={{
          height: heightPercentageToDP(20),
          width: widthPercentageToDP(100),
          position: 'absolute',
          right: -50,
          top: -40,
          //   transform: [{rotate: '145deg'}],
          // backgroundColor: 'blue',
          // backgroundColor: 'blue',
        }}>
        <Image
          style={{
            height: '100%',
            width: '100%',
            opacity: 0.5,
            // transform: [{rotate: '380deg'}],
          }}
          source={require('../../assets/images/bgDashBoard.png')}
        />
      </View>

      <View
        style={{
          marginTop: heightPercentageToDP(7),
          flexDirection: 'row',
          //   padding: 12,
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: widthPercentageToDP(5),
        }}>
        <TouchableOpacity style={{height: 20, width: 20}}>
          <Image
            source={require('../../assets/images/menu.png')}
            style={{height: '100%', width: '100%'}}
          />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{height: 20, width: 20, marginRight: 5}}>
            <Image
              source={require('../../assets/images/location.png')}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <Text
            style={{
              color: '#4B5563',
              textAlign: 'center',
              fontFamily: 'Avenir',
              fontSize: 12,
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: 28,
            }}>
            Freedom way, Lekki phase
          </Text>
        </View>

        <View style={{height: 40, width: 40, borderRadius: 50}}>
          <Image
            source={require('../../assets/images/userProfile.png')}
            style={{height: '100%', width: '100%'}}
          />
        </View>
      </View>
      <View
        style={{
          marginHorizontal: widthPercentageToDP(5),
        }}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#FFF0F0', '#FFDFDF']}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: widthPercentageToDP(4),
            borderRadius: 10,
            marginTop: heightPercentageToDP(2.5),
          }}>
          <View
            style={{
              height: 20,
              width: 20,
              marginLeft: widthPercentageToDP(5),
            }}>
            <Image
              resizeMode="cover"
              source={require('../../assets/images/search.png')}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <TextInput
            placeholder="Search"
            placeholderTextColor={'#000'}
            style={{
              flex: 1,
              marginLeft: widthPercentageToDP(4),
              color: '#000',
            }}
          />
        </LinearGradient>
      </View>
      {/* slider */}
      <View
        style={{
          height: heightPercentageToDP(25),
          marginTop: 20,
        }}>
        <ScrollView
          ref={scrollViewRef}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          horizontal
          onMomentumScrollEnd={handleScrollEnd}
          style={{flex: 1}}>
          {sliderData.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  width: widthPercentageToDP(100),
                  height: heightPercentageToDP(25),
                  paddingVertical: 10,
                  justifyContent: 'center',
                  alignItems: 'center', // Allow the inner content to take all available space
                  // Center the content vertically
                }}>
                <View
                  style={{
                    width: '95%',
                    height: '100%',
                    borderRadius: 20,
                    flexDirection: 'row',
                    // justifyContent: 'space-around',
                    backgroundColor: 'red',
                    overflow: 'hidden',
                  }}>
                  <View
                    style={{
                      flex: 0.5,
                      paddingTop: 20,
                      paddingLeft: 20,
                      paddingBottom: 20,
                      marginTop: 20,
                      paddingRight: 20,
                    }}>
                    <Text
                      style={{
                        color: '#FFF',
                        fontFamily: 'Avenir',
                        fontSize: 18,
                        fontStyle: 'normal',
                        fontWeight: '800',
                        width: '80%',
                      }}>
                      Special Offer for March
                    </Text>
                    <Text
                      style={{
                        color: '#FFF',
                        fontFamily: 'Avenir',
                        fontSize: 10,
                        fontStyle: 'normal',
                        fontWeight: '500',
                        width: '80%',
                        marginTop: 3,
                      }}>
                      We are here with the best deserts intown.
                    </Text>
                    <TouchableOpacity
                      style={{
                        padding: 6,
                        width: '50%',
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 5,
                        marginTop: 15,
                      }}>
                      <Text style={{color: 'red'}}>Buy Now</Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      //   backgroundColor: 'blue',
                      flex: 0.5,
                      //   justifyContent: 'flex-end',
                      //   alignItems: 'center',
                    }}>
                    <View
                      style={{
                        height: 170,
                        width: 250,
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                      }}>
                      <Image
                        resizeMode="cover"
                        source={item.image}
                        style={{height: '100%', width: '100%'}}
                      />
                    </View>
                  </View>
                </View>
              </View>
            );
          })}

          {/* <View
            style={{
              width: widthPercentageToDP(100),
              height: heightPercentageToDP(25),
              paddingVertical: 10,
              justifyContent: 'center',
              alignItems: 'center', // Allow the inner content to take all available space
              // Center the content vertically
            }}>
            <View
              style={{
                width: '95%',
                height: '100%',
                borderRadius: 20,
                flexDirection: 'row',
                // justifyContent: 'space-around',
                backgroundColor: 'red',
                overflow: 'hidden',
              }}>
              <View
                style={{
                  flex: 0.5,
                  paddingTop: 20,
                  paddingLeft: 20,
                  paddingBottom: 20,
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    color: '#FFF',
                    fontFamily: 'Avenir',
                    fontSize: 18,
                    fontStyle: 'normal',
                    fontWeight: '800',
                    width: '80%',
                  }}>
                  Special Offer for March
                </Text>
                <Text
                  style={{
                    color: '#FFF',
                    fontFamily: 'Avenir',
                    fontSize: 10,
                    fontStyle: 'normal',
                    fontWeight: '500',
                    width: '90%',
                    marginTop: 3,
                  }}>
                  We are here with the best deserts intown.
                </Text>
                <TouchableOpacity
                  style={{
                    padding: 6,
                    width: '50%',
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 5,
                    marginTop: 15,
                  }}>
                  <Text style={{color: 'red'}}>Buy Now</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  //   backgroundColor: 'blue',
                  flex: 0.7,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                <Image
                  resizeMode="stretch"
                  source={require('../../assets/images/slider1.png')}
                  style={{height: '100%', width: '100%'}}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              width: widthPercentageToDP(100),
              height: heightPercentageToDP(25),
              paddingVertical: 10,
              justifyContent: 'center',
              alignItems: 'center', // Allow the inner content to take all available space
              // Center the content vertically
            }}>
            <View
              style={{
                width: '95%',
                height: '100%',
                borderRadius: 20,
                flexDirection: 'row',
                // justifyContent: 'space-around',
                backgroundColor: 'red',
                overflow: 'hidden',
              }}>
              <View
                style={{
                  flex: 0.5,
                  paddingTop: 20,
                  paddingLeft: 20,
                  paddingBottom: 20,
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    color: '#FFF',
                    fontFamily: 'Avenir',
                    fontSize: 18,
                    fontStyle: 'normal',
                    fontWeight: '800',
                    width: '80%',
                  }}>
                  Special Offer for March
                </Text>
                <Text
                  style={{
                    color: '#FFF',
                    fontFamily: 'Avenir',
                    fontSize: 10,
                    fontStyle: 'normal',
                    fontWeight: '500',
                    width: '90%',
                    marginTop: 3,
                  }}>
                  We are here with the best deserts intown.
                </Text>
                <TouchableOpacity
                  style={{
                    padding: 6,
                    width: '50%',
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 5,
                    marginTop: 15,
                  }}>
                  <Text style={{color: 'red'}}>Buy Now</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  //   backgroundColor: 'blue',
                  flex: 0.7,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                <Image
                  resizeMode="stretch"
                  source={require('../../assets/images/slider1.png')}
                  style={{height: '100%', width: '100%'}}
                />
              </View>
            </View>
          </View> */}
        </ScrollView>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        {sliderData.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                height: 10,
                width: 10,
                borderRadius: 50,
                backgroundColor: currentIndex == index ? 'red' : '#E2E2E2',
                margin: 4,
              }}></View>
          );
        })}
        {/* <Text>shfsudfhuy</Text> */}
      </View>

      {/* <Text>duasgdasf</Text> */}

      {/* <Image
        resizeMode="cover"
        style={{flex: 1}}
        source={require('../../assets/images/bgDashBoard.png')}
      /> */}
      {/* <View style={{flex: 1}}></View>
      <View style={{flex: 1}}></View>
      <View style={{flex: 1, backgroundColor: 'blue'}}></View> */}
    </View>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
