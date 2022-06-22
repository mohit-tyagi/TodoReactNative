import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>TODO List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    backgroundColor: 'skyblue',
    paddingBottom: 20,
  },
  text: {
    fontSize: 36,
    textAlign: 'center',
  },
});

export default Header;
