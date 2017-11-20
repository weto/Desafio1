import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  telaPost: {
    flex: 1,
    height: 200,
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    marginBottom: 5,
    borderRadius: 5,
    borderColor: '#DA6C6C',
    shadowColor: '#DA6C6C',
    shadowOpacity: 100,
    overflow: 'hidden',
  },
  tituloPost: {
    fontWeight: 'bold',
    fontSize: 19,
    color: '#000',
  },
  cabecalhoPost: {
    width: '100%',
    height: 55,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  tituloAutorPost: {
    fontWeight: 'bold',
    color: '#999999',
  },
  conteudo: {
    paddingTop: 10,
    height: 116,
    overflow: 'hidden',
  },
  fonteConteudo: {
    fontSize: 17,
    color: '#666666',
    textAlign: 'justify',
  },
});

const Post = ({ post }) => (
  <View style={styles.telaPost}>
    <View style={styles.cabecalhoPost}>
      <Text style={styles.tituloPost}>{post.titulo}</Text>
      <Text style={styles.tituloAutorPost}>{post.autor}</Text>
    </View>
    <View style={styles.conteudo}>
      <Text style={styles.fonteConteudo}>{post.descricao}</Text>
    </View>
  </View>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    titulo: PropTypes.string,
    autor: PropTypes.string,
    descricao: PropTypes.string,
  }).isRequired,
};


export default Post;
