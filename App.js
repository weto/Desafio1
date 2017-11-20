import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Header from './src/components/Header';
import Post from './src/components/Post';

import './config/ReactotronConfig';

const listaPost = [
  {
    id: 1,
    titulo: 'Aprendendo React',
    autor: 'Diego Schell Fernandes',
    descricao: 'Lorem ipsum dolor sit amet, ei eum ubique noster epicuri, in duo omittantur referrentur. Utinam ubique an sed, ei rationibus reprehendunt pro, et sea graeci expetenda. Eum ne dicat harum.',
  },
  {
    id: 2,
    titulo: 'Aprendendo React Native',
    autor: 'Diego Schell Fernandes',
    descricao: 'Lorem ipsum dolor sit amet, ei eum ubique noster epicuri, in duo omittantur referrentur. Utinam ubique an sed, ei rationibus reprehendunt pro, et sea graeci expetenda. Eum ne dicat harum.',
  },
  {
    id: 3,
    titulo: 'Aprendendo GraphQL',
    autor: 'Diego Schell Fernandes',
    descricao: 'Lorem ipsum dolor sit amet, ei eum ubique noster epicuri, in duo omittantur referrentur. Utinam ubique an sed, ei rationibus reprehendunt pro, et sea graeci expetenda. Eum ne dicat harum.',
  },
];

const styles = StyleSheet.create({
  fundo: {
    backgroundColor: '#EE7777',
    flex: 1,
  },
});

const App = () => (
  <ScrollView style={styles.fundo}>
    <Header />
    {
      listaPost.map(item => <Post key={item.id} post={item} />)
    }
  </ScrollView>
);

export default App;
