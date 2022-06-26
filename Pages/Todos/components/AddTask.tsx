import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Modal,
} from 'react-native';

interface AddTaskProps {
  onAddTask: any;
}

const AddTask = ({onAddTask}: AddTaskProps) => {
  const [task, setTask] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const onAddTaskHandler = () => {
    onAddTask(task);
    setModalOpen(false);
    setTask('');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setModalOpen(true);
        }}>
        <Text style={styles.sectionTitle}> + Add Task </Text>
      </TouchableOpacity>
      <Modal visible={modalOpen} animationType="slide" transparent={true}>
        <View style={styles.modalContent}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.closeContainer}
              onPress={() => {
                setModalOpen(false);
              }}>
              <Text style={styles.close}>X</Text>
            </TouchableOpacity>
            <TextInput
              multiline={true}
              style={styles.textInput}
              value={task}
              placeholder="Enter new task"
              onChangeText={text => setTask(text)}
            />
            <TouchableOpacity style={styles.btn}>
              <Text
                selectable={false}
                style={styles.addTaskBtn}
                onPress={() => onAddTaskHandler()}>
                ADD TASK
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#bbb',
    borderRadius: 5,
    paddingBottom: 5,
    paddingTop: 5,
  },
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
    width: '100%',
    height: 200,
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'red,',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: '100%',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeContainer: {
    flex: 1,
    marginBottom: 50,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  close: {
    fontSize: 30,
    height: 50,
    padding: 10,
    backgroundColor: '#aabbcc',
    textAlign: 'center',
    borderRadius: 10,
  },
  btn: {
    backgroundColor: '#80d4ff',
    borderRadius: 5,
    marginTop: 10,
  },
  addTaskBtn: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    padding: 5,
  },
});

export default AddTask;
