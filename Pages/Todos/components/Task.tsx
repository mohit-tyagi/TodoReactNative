import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

interface TaskProps {
  text: string;
  onDeleteTaskHandler: any;
  onTaskClickHandler: any;
}

const Task = ({text, onDeleteTaskHandler, onTaskClickHandler}: TaskProps) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <CheckBox
          style={styles.checkBox}
          value={isSelected}
          boxType={'square'}
          onFillColor={'#00FF00'}
          onValueChange={newValue => setSelection(newValue)}
        />
        <TouchableOpacity
          onPress={onTaskClickHandler}
          style={styles.itemTextParent}>
          <Text style={[styles.itemText, isSelected && styles.strikeText]}>
            {text}
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.delete} onPress={() => onDeleteTaskHandler(text)}>
        X
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  itemTextParent: {
    width: '80%',
    height: '100%',
  },
  itemText: {
    padding: 10,
  },
  delete: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  checkBox: {
    marginRight: 15,
  },
  strikeText: {
    textDecorationLine: 'line-through',
  },
});

export default Task;
