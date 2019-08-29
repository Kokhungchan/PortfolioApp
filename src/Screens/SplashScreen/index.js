import React, {Component} from 'react'
import { View, Text, ImageBackground,TouchableOpacity,Image,AlertIOS } from 'react-native'
import {createStackNavigator, createAppContainer} from 'react-navigation';
import styles from './styles'
import TouchID from 'react-native-touch-id'

class HomeScreen extends Component {


    render() {
        return(
            <ImageBackground
                source={require('../../Assets/bg.jpg')}
                style={styles.imageSplash}>
              <View style={styles.overlayContainer}>
                  <View style={styles.title}>
                      <Text style={styles.titleSplash}>WELCOME</Text>
                  </View>
                  <View style={styles.enterContainer}>
        <TouchableOpacity style={styles.subtitleContainer} onPress={()=>this.props.navigation.navigate('ProfileScreen')}>
                          <Text style={styles.subtitle}>Enter</Text>
                        </TouchableOpacity>
                  </View>

              </View>
            </ImageBackground>
        );
    }


}


export default HomeScreen