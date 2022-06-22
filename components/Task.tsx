import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

interface TaskProps {
  text: string;
  onDeleteTaskHandler: any;
}

const Task = ({text, onDeleteTaskHandler}: TaskProps) => {
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
        <Text style={[styles.itemText, isSelected && styles.strikeText]}>
          {text}
        </Text>
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
  itemText: {
    width: '80%',
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
