import React, { useEffect, useReducer } from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import PostsComponent from './components/PostsComponent';
import SearchComponent from './components/SearchComponent';
import { actionCreators, initialState, reducer } from './filter';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [state, dispatch] = useReducer(reducer, initialState);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const getJSONData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json())
      .then((responseJson) => {
        let list = [];
        list = [];
        let i = 0;
        while (i++ < 30) {
          list = list.concat(responseJson.filter(t => t.randomNumber = Math.floor(Math.random() * (9000000000 - 1000000000)) + 1000000000));
        }
        dispatch(actionCreators.add(list));
      }).catch(e => {

      });
  }

  useEffect(() => {
    (async () => {
      getJSONData();
    })();
  }, []);


  return (
    <SafeAreaView style={[backgroundStyle, { flex: 1 }]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white, flex: 1
        }}>
        <Image style={styles.headerImage} source={require("./assets/doggo_walk.gif")} ></Image>
        <SearchComponent onSubmitEditing={(text) => dispatch(actionCreators.filter(text))}></SearchComponent>
        <PostsComponent posts={state.posts}></PostsComponent>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width: '100%'

  }
});

export default App;
