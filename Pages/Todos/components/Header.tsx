import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface HeaderProps {
  navigation: any;
}

const Header = ({navigation}: HeaderProps) => {
  return (
    <View style={styles.header}>
      <View style={styles.nav}>
        <TouchableOpacity
          style={styles.menu}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.text}> TODO</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.nav}>
        <TouchableOpacity
          style={styles.menu}
          onPress={() => navigation.navigate('TaskDetails')}>
          <Text style={styles.text}> Task Details</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.nav}>
        <TouchableOpacity
          style={styles.menu}
          onPress={() => navigation.navigate('About')}>
          <Text style={styles.text}> About</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'skyblue',
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  nav: {
    paddingRight: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 5,
  },
  menu: {},
  text: {
    fontSize: 20,
  },
});

export default Header;
