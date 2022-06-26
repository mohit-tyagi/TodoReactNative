import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import Header from '../Todos/components/Header';

const TaskDetails = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Header navigation={navigation} />
        <View>
          <Text>This is Task details page</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TaskDetails;
