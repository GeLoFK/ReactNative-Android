import React, {useState, useEffect} from 'react';
import {
  View,
  Button,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
  Alert,
  TextInput,
  Linking,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setString} from '../store/action/stringActions';

function News({navigation}) {
  const newsFromStore = useSelector(state => state.news.articles);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState('');
  const [flag, setFlag] = useState(true);
  const dispatch = useDispatch();
  const savedString = useSelector(state => state.string.savedString);
  const renderItem = ({item, index}) => (
    <View key={index} style={styles.post}>
      {item.urlToImage && (
        <Image source={{uri: item.urlToImage}} style={styles.image} />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title || 'Без новин'}</Text>
        <Text style={styles.date}>{item.publishedAt || 'Без дати'}</Text>
        <Text style={styles.description}>
          {item.description && item.description.length > 100
            ? item.description.substring(0, 100) + '...'
            : item.description || 'Без подзаголовка'}
        </Text>
        <View style={styles.buttonContainer1}>
          <Button
            style={styles.button1}
            title={'Перейти'}
            onPress={() => Linking.openURL(`${item.url}`)}
          />
        </View>
      </View>
    </View>
  );

  useEffect(() => {
    if (newsFromStore && flag == true) {
      setNews(newsFromStore);
      setLoading(false);
      setFlag(false);
      //Alert.alert('Fetching news with query:', savedString);
    } else {
      fetch(
        `https://newsapi.org/v2/everything?q=${savedString}&from=2023-12-13&sortBy=popularity&apiKey=12661ef1e65c42f3b9aad032b9a3e8b7`,
        {
          method: 'GET',
        },
      )
        .then(response => response.json())
        .then(data => {
          setNews(data.articles);
          setLoading(false);
        })
        .catch(error => {
          console.error('Немає мережі(', error);
          setLoading(false);
        });
    }
  }, [savedString]);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{
            width: 100,
            height: 100,
          }}
          source={{
            uri: 'https://st3.depositphotos.com/6723736/12729/v/450/depositphotos_127297230-stock-illustration-download-sign-load-icon-load.jpg',
          }}
        />
        <Text>Загрузка...</Text>
      </View>
    );
  }

  return (
    <View>
      <View
        style={{
          padding: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'rgb(224, 224, 224)',
          borderBottomWidth: 1,
        }}>
        <TextInput
          style={{
            height: 40,
            margin: 12,
            width: 350,
            borderWidth: 1,
            padding: 10,
            borderRadius: 50,
            borderColor: 'rgb(224, 224, 224)',
            backgroundColor: 'rgb(63,63,175)',
          }}
          placeholder="Які новини вас цікавлять?"
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />
        <Button title="Пошук" onPress={() => dispatch(setString(text))} />
      </View>
      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    flexDirection: 'column',
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'rgb(255, 0, 0)',
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#cccccc',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 200,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  date: {
    color: 'grey',
    marginBottom: 5,
  },
  description: {
    color: 'black',
  },
  buttonContainer1: {
    position: 'absolute',
    bottom: 18,
    right: 10,
    width: 100,
    height: 50,
  },
  button1: {
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 50,
    backgroundColor: 'blue',
  },
});
export default News;
