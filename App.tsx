import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [text, onChangeText] = React.useState('');
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/*<Header />*/}
        <View
          style={{
            backgroundColor: 'rgb(255,255,255)',
          }}>
          <View style={styles.header}>
            <Text style={styles.headerNavigation}>‹ Чат</Text>
            <Text style={styles.headerTitle}>ІнстаграмМобайл</Text>
            <Image
              style={styles.settingLogo}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/9970/9970414.png',
              }}
            />
          </View>
          <View style={styles.messagesSection}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://static.wikia.nocookie.net/warrior/images/a/ad/Deathofkevincrow.jpg/revision/latest?cb=20160202110346&path-prefix=ru',
              }}
            />
            <View style={styles.message}>
              <Text style={styles.messageText}>Зробимо це 👌</Text>
              <View style={styles.nosik} />
            </View>
          </View>
          <View style={styles.messagesSection}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'data:image/jpeg;base64,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',
              }}
            />
            <View style={styles.message}>
              <Text style={styles.messageText}>
                Чудово, щойно надіслала запрошення! 😎
              </Text>
              <View style={styles.nosik} />
            </View>
          </View>
          <View style={{marginTop: 35, height: 10, width: 10}} />
          <View style={styles.myMessagesSection}>
            <View style={styles.myResendMessages}>
              <Text style={{fontSize: 12}}>↳ Ви відповіли Тайлеру</Text>
              <Text>Привіт, хлопці, я збираюся запланувати відео</Text>
              <Text>на конференції</Text>
            </View>
            <View style={styles.myMessage}>
              <Text style={styles.myMessageText}>Це насправді так круто</Text>
              <View style={styles.myNosik} />
            </View>
            <Image
              style={styles.myTinyLogo}
              source={{
                uri: 'data:image/jpeg;base64,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',
              }}
            />
          </View>
          <View style={{marginTop: 35, height: 10, width: 10}} />
          <View style={styles.myMessagesSection}>
            <View style={styles.myResendMessages}>
              <Text style={{fontSize: 12}}>↳ Ви відповіли Тайлеру</Text>
              <Text>Зробимо це 👌</Text>
            </View>
            <View style={styles.myMessage}>
              <Text style={styles.myMessageText}>Так багато хвилювання 🔥</Text>
              <View style={styles.myNosik} />
            </View>
            <Image
              style={styles.myTinyLogo}
              source={{
                uri: 'data:image/jpeg;base64,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',
              }}
            />
          </View>
          <View style={styles.messagesSection}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://static.wikia.nocookie.net/warrior/images/a/ad/Deathofkevincrow.jpg/revision/latest?cb=20160202110346&path-prefix=ru',
              }}
            />
            <View style={styles.message}>
              <Text style={styles.messageText}>ХаХа, звісно</Text>
              <View style={styles.nosik} />
            </View>
          </View>
          <View style={{marginTop: 30, height: 10, width: 10}} />
          <View style={styles.messagesSection}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://static.wikia.nocookie.net/warrior/images/a/ad/Deathofkevincrow.jpg/revision/latest?cb=20160202110346&path-prefix=ru',
              }}
            />
            <View style={styles.resendMessages}>
              <Text style={{fontSize: 12}}>↳ Ответ Марле</Text>
              <Text>Чудово, щойно надіслала запрошення! 😎</Text>
            </View>

            <View style={styles.message}>
              <Text style={styles.messageText}>Да, я так и понял 👌</Text>
              <View style={styles.nosik} />
            </View>
          </View>
          <View style={{marginTop: 30, height: 10, width: 10}} />
          <View style={styles.messagesSection}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://static.wikia.nocookie.net/warrior/images/a/ad/Deathofkevincrow.jpg/revision/latest?cb=20160202110346&path-prefix=ru',
              }}
            />
            <View style={styles.resendMessages}>
              <Text style={{fontSize: 12}}>↳ Ответ Марле</Text>
              <Text>Так багато хвилювання 🔥</Text>
            </View>
            <View style={styles.message}>
              <Text style={styles.messageText}>Согласен 🥳</Text>
              <View style={styles.nosik} />
            </View>
          </View>

          <View style={styles.inputSection}>
            <Image
              style={styles.cameraLogo}
              source={{
                uri: 'https://s1.iconbird.com/ico/2013/12/505/w450h4001385925290Camera.png',
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="Start typing..."
              onChangeText={onChangeText}
              value={text}
            />
            <Image
              style={styles.micropfoneLogo}
              source={{
                uri: 'https://st3.depositphotos.com/15896958/35678/v/450/depositphotos_356789970-stock-illustration-microphone-icon-vector-voice-icon.jpg',
              }}
            />
            <Image
              style={styles.sendLogo}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/3682/3682321.png',
              }}
            />
          </View>
          <View style={styles.chat}>{/* Your chat messages here */}</View>
          <View style={styles.inputSection}>
            {/* Your input section here */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    borderBlockEndColor: 'rgb(224, 224, 224)',
    borderBottomWidth: 2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  chat: {
    height: 'auto',
    borderBlockEndColor: 'rgb(224, 224, 224)',
    borderBottomWidth: 2,
    paddingBottom: 10,
  },
  headerNavigation: {
    marginLeft: 10,
    fontSize: 20,
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
    width: 50,
    height: 50,
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
});

export default App;
