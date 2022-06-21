import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Task = props => {
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
          {props.text}
        </Text>
      </View>
      <View style={styles.circular} />
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
  circular: {
    width: 12,
    height: 12,
    backgroundColor: '#55BCF6',
    borderRadius: 5,
    borderWidth: 2,
  },
  checkBox: {
    marginRight: 15,
  },
  strikeText: {
    textDecorationLine: 'line-through',
  },
});

export default Task;
