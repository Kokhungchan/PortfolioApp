import HomeScreen from '../../Screens/SplashScreen';
import {createStackNavigator, createDrawerNavigator,StackNavigator} from 'react-navigation';
import {createAppContainer} from '@react-navigation/native'
import ProfileScreen from '../../Screens/ProfileScreen'
import SettingsScreen from '../../Screens/SettingsScreen'


const AppNavigator = createStackNavigator( {
    HomeScreen: {screen: HomeScreen,
    navigationOptions:{
        header:null,
    },
},

    ProfileScreen: {screen: ProfileScreen,
    navigationOptions: {
        header: null,
    }, 
},
},
{
    initialRouteName: 'HomeScreen',
    transitionConfig: NavigationConfig,
}
)


const Drawer = createDrawerNavigator (
    {
    Home: {
        screen: AppNavigator,
    },
},
{
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    navigationOptions: {
        drawerLockMode: 'locked-closed',
    },
},
);


const FadeTransition = (index,position) => {
      const sceneRange = [index -1, index];
      const outputOpacity = [0,1];
      const transition = position.interpolate({
          inputRange: sceneRange,
          outputRange: outputOpacity,
      });

      return {
          opacity: transition
      }
}

const NavigationConfig = () => {
    return {
        screenInterpolator: (sceneProps) => {
            const position = sceneProps.position;
            const scene = sceneProps.scene;
            const index = scene.index;

            return FadeTransition(index,position);
        }
    }
}

  export default createAppContainer(AppNavigator)
  