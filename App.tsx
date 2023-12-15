import React, {useEffect} from 'react';

import News from './Component/News';
import {
  Button,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {setNews} from './store/action/newsActions';
import {Provider, useDispatch, useSelector} from 'react-redux';
import store, {persistor} from './store';
import NewsUkraine from './Component/NewsUkraine';
import {PersistGate} from 'redux-persist/integration/react';

function HomeScreen({navigation}) {
  const savedString = useSelector(state => state.string.savedString);
  const dispatch = useDispatch();
  const newsFromStore = useSelector(state => state.news.articles);
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${savedString}&from=2023-12-13&sortBy=popularity&apiKey=a0a31f938c6a44488f3d693366954b2a`,
    )
      .then(response => response.json())
      .then(data => {
        dispatch(setNews(data.articles));
      })
      .catch(error => console.error('Get news error!!!!!!!', error));
  }, [dispatch]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cccccc',
      }}>
      <Text style={{fontSize: 32, fontWeight: 'bold', color: 'black'}}>
        Про нас
      </Text>
      <Text style={styles.about}>
        ФІТІС орієнтований на комплексну підготовку студентів
      </Text>
      <Button
        title={'Сайт ФІТІС'}
        onPress={() => Linking.openURL('https://fitis.chdtu.edu.ua')}
      />
      <Image
        style={styles.aboutLogo}
        source={{
          uri: 'https://desu.shikimori.one/system/user_images/original/962062/1931660.jpg',
        }}
      />
      <View style={{flex: 1, justifyContent: 'flex-end', width: '100%'}}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.button}>
            <Image
              style={styles.homeLogo}
              source={{
                uri: 'https://media.istockphoto.com/id/1261718311/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BA%D0%B0%D0%BB%D0%B5%D0%BD%D0%B4%D0%B0%D1%80%D1%8C-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D1%80%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D1%8F-%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9-%D1%86%D0%B2%D0%B5%D1%82.jpg?s=612x612&w=0&k=20&c=jYwpGo-cwTjwu8cD93WRB-YYKn0hUXy-LBktpwH-QZU=',
              }}
            />
            <Text style={{color: 'black', textAlign: 'center'}}>Про нас</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}
            style={{
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }}>
            <Image
              style={styles.userLogo}
              source={{
                uri: 'https://e7.pngegg.com/pngimages/426/859/png-clipart-computer-icons-user-membership-black-area.png',
              }}
            />
            <Text style={{color: 'black', textAlign: 'center'}}>Профіль</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function DetailsScreen({navigation: navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cccccc',
      }}>
      <Image
        style={{
          borderRadius: 50,
          width: 200,
          height: 200,
          marginTop: 30,
        }}
        source={{
          uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRLThjr66TONolfGp4413CQTRmEqeiIfXQyeYezNIH33C9epDIf',
        }}
      />
      <Text style={{fontSize: 50, fontWeight: 400, color: 'black'}}>
        Денис Кравець
      </Text>
      <Text style={{fontSize: 30, fontWeight: 400, color: 'black'}}>
        На вітрині Миша
      </Text>
      <View style={{flex: 1, justifyContent: 'flex-end', width: 400}}>
        <Text style={{textAlign: 'center', marginBottom: 10, color: 'black'}}>
          WEBC-2211
        </Text>
        <View
          style={{
            borderTopWidth: 1,
            borderColor: 'rgb(206,206,208)',
            height: 80,
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: 'rgb(231,234,236)',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }}>
            <Image
              style={styles.homeLogo}
              source={{
                uri: 'https://media.istockphoto.com/id/1261718311/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BA%D0%B0%D0%BB%D0%B5%D0%BD%D0%B4%D0%B0%D1%80%D1%8C-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D1%80%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D1%8F-%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9-%D1%86%D0%B2%D0%B5%D1%82.jpg?s=612x612&w=0&k=20&c=jYwpGo-cwTjwu8cD93WRB-YYKn0hUXy-LBktpwH-QZU=',
              }}
            />
            <Text style={{color: 'black', textAlign: 'center'}}>Про нас</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}
            style={{
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }}>
            <Image
              style={styles.userLogo}
              source={{
                uri: 'https://e7.pngegg.com/pngimages/426/859/png-clipart-computer-icons-user-membership-black-area.png',
              }}
            />
            <Text style={{color: 'black', textAlign: 'center'}}>Профіль</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return <News />;
}
function NewsUkraineScreen({navigation}) {
  return <NewsUkraine />;
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={DetailsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <PersistGate loading={<Text>Звгрузка...</Text>} persistor={persistor}>
      <Provider store={store}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Main">
            <Drawer.Screen name="Меню" component={StackNavigator} />
            <Drawer.Screen name="Новини" component={NotificationsScreen} />
            <Drawer.Screen name="News Ukraine" component={NewsUkraineScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
    </PersistGate>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 700,
    borderBlockEndColor: 'rgb(224, 224, 224)',
    borderBottomWidth: 2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  footer: {
    paddingLeft: 55,
    paddingRight: 55,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopWidth: 3,
    borderTopColor: 'black',
  },
  item: {
    alignItems: 'center',
  },
  footerNavigation: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgb(2,2,2)',
  },
  homeLogo: {
    width: 30,
    height: 30,
  },
  userLogo: {
    width: 30,
    height: 30,
  },
  chat: {
    height: 'auto',
    borderBlockEndColor: 'rgb(224, 224, 224)',
    borderBottomWidth: 2,
    paddingBottom: 10,
  },
  headerNavigation: {
    marginLeft: 10,
    fontSize: 50,
    fontWeight: 'bold',
    color: 'rgb(2,2,2)',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(2,2,2)',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  myResendMessages: {
    backgroundColor: 'rgb(156,156,166)',
    height: 'auto',
    textAlign: 'center',
    alignContent: 'center',
    borderRadius: 10,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 20,
    fontSize: 20,
    fontWeight: 400,
    position: 'absolute',
    right: 55,
    top: -50,
  },
  resendMessages: {
    backgroundColor: 'rgb(156,156,166)',
    height: 'auto',
    textAlign: 'center',
    alignContent: 'center',
    borderRadius: 10,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 20,
    fontSize: 20,
    fontWeight: 400,
    position: 'absolute',
    left: 55,
    top: -50,
  },
  highlight: {
    fontWeight: '700',
  },
  tinyLogo: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  settingLogo: {
    width: 40,
    height: 40,
    justifyContent: 'flex-end',
  },
  messageText: {
    position: 'relative',
    zIndex: 10,
    color: 'rgb(0,0,0)',
  },
  myMessageText: {
    position: 'relative',
    zIndex: 10,
    color: 'rgb(255,255,255)',
  },
  messagesSection: {
    marginLeft: 10,
    flexDirection: 'row',
    marginTop: 20,
    alignContent: 'center',
    flex: 1,
    zIndex: 5,
  },
  message: {
    backgroundColor: 'rgb(224, 224, 224)',
    textAlign: 'center',
    alignContent: 'center',
    borderRadius: 10,
    padding: 10,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 400,
  },
  about: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Arial',
    lineHeight: 28,
    textAlign: 'center',
    marginHorizontal: 30,
    marginTop: 30,
  },
  aboutLogo: {
    height: 300,
    width: 320,
    position: 'absolute',
    bottom: 80,
  },
  nosik: {
    position: 'absolute',
    left: 5,
    top: '120%',
    backgroundColor: 'rgb(224, 224, 224)',
    width: 15,
    height: 15,
    transform: [{translateX: -10}, {translateY: -10}, {rotate: '45deg'}],
  },
  myMessagesSection: {
    marginRight: 10,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginTop: 20,
    alignContent: 'center',
    flex: 1,
  },
  myTinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  myMessage: {
    backgroundColor: 'rgb(55, 116, 232)',
    textAlign: 'center',
    alignContent: 'center',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    fontSize: 20,
    fontWeight: 400,
  },
  myNosik: {
    position: 'absolute',
    right: -15,
    top: '120%',
    backgroundColor: 'rgb(55, 116, 232)',
    width: 15,
    height: 15,
    transform: [{translateX: -10}, {translateY: -10}, {rotate: '45deg'}],
  },
  inputSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    margin: 12,
    width: 320,
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
    borderColor: 'rgb(224, 224, 224)',
  },
  sendLogo: {
    width: 25,
    height: 25,
    position: 'relative',
    right: 10,
  },
  cameraLogo: {
    width: 25,
    height: 25,
    position: 'relative',
    left: 10,
  },
  micropfoneLogo: {
    width: 25,
    height: 25,
    position: 'absolute',
    left: 50,
    zIndex: 10,
  },
  buttonContainer: {
    borderTopWidth: 1,
    borderColor: 'rgb(206,206,208)',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgb(231,234,236)',
    width: '100%',
  },
  button: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
});

export default App;
