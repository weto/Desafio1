import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  tituloCabecalho: {
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fonteCabecalho: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17,
    color: '#333333',
  },
});

const Header = () => (
  <View style={styles.tituloCabecalho}>
    <Text style={styles.fonteCabecalho}>GoNative App</Text>
  </View>
);

export default Header;
