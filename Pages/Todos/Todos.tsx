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
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  Alert,
} from 'react-native';
import Task from './components/Task';
import AddTask from './components/AddTask';
import Header from './components/Header';

const Todos = () => {
  const [tasks, setTasks] = React.useState(['Sample todo task']);

  const onAddTaskHandler = (task: string) => {
    if (!task) {
      Alert.alert('Please add todo details');
    } else {
      setTasks((prevState: string[]) => {
        setTasks([task, ...prevState]);
      });
    }
  };

  const onDeleteTaskHandler = (task: string) => {
    if (!task) {
      Alert.alert('Unable to delete');
    } else {
      setTasks((prevState: string[]) => {
        setTasks(prevState.filter(arrayItem => arrayItem !== task));
      });
      Alert.alert('Deleted!');
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Header />
          <View style={styles.taskWrapper}>
            <AddTask onAddTask={onAddTaskHandler} />
            <Text style={styles.sectionTitle}> Today's Task</Text>
            <View style={styles.items}>
              <FlatList
                data={tasks}
                renderItem={item => {
                  return (
                    <Task
                      text={item.item}
                      onDeleteTaskHandler={onDeleteTaskHandler}
                    />
                  );
                }}
              />
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
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 20,
  },
});

export default Todos;
