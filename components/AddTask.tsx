import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

interface AddTaskProps {
  onAddTask: any;
}

const AddTask = ({onAddTask}: AddTaskProps) => {
  const [task, setTask] = useState('');

  const onAddTaskhandler = () => {
    onAddTask(task);
    setTask('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}> Add new Task</Text>
      <View>
        <TextInput
          style={styles.textInput}
          value={task}
          placeholder="Enter new task"
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity style={styles.btn}>
          <Text
            selectable={false}
            style={styles.addTaskBtn}
            onPress={() => onAddTaskhandler()}>
            ADD TASK
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  textInput: {
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  btn: {
    backgroundColor: '#80d4ff',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 30,
  },
  addTaskBtn: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    padding: 5,
  },
});

export default AddTask;
