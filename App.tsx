/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import Task from './components/Task';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.taskWrapper}>
            <Text style={styles.sectionTitle}> Today's Task</Text>
            <View style={styles.items}>
              <Task text={'Task 1'} />
              <Task text={'Task 2'} />
              <Task text={'Task 3'} />
              <Task text={'Task 4 '} />
              <Task text={'Task 5'} />
              <Task text={'Task 6'} />
              <Task text={'Task 6'} />
              <Task text={'Task 6'} />
              <Task text={'Task 6'} />
              <Task text={'Task 6'} />
              <Task text={'Task 6'} />
              <Task text={'Task 6'} />
              <Task text={'Task 6'} />
              <Task text={'Task 6'} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
  },
  taskWrapper: {
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 20,
  },
});

export default App;
