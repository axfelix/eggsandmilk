import React, { useState } from 'react';
import { Text, TextInput, View, Button, StyleSheet, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const EggsAndMilk = () => {

  const [eggs, setEggs] = useState('');
  const [eggConsumption, setEggConsumption] = useState('');
  const [milk, setMilk] = useState('');
  const [milkConsumption, setMilkConsumption] = useState('');
  const [submitted, setSubmitted] = useState('');

  return (
    <View style={{padding: 10}}>
      <Text style={{padding: 10, fontSize: 18}}>
        Enter the number of eggs you have:
      </Text>
      <TextInput
        style={{height: 32, backgroundColor: '#d3d3d3' }}
        keyboardType="number-pad"
        name="eggs"
        defaultValue={eggs}
        onChangeText={eggs => setEggs(eggs)}
      />
      <Text style={{padding: 10, fontSize: 18}}>
        Enter the number of eggs you eat per day:
      </Text>
      <TextInput
        style={{height: 32, backgroundColor: '#d3d3d3' }}
        keyboardType="number-pad"
        name="eggConsumption"
        defaultValue={eggConsumption}
        onChangeText={eggConsumption => setEggConsumption(eggConsumption)}
      />
       <Text style={{padding: 10, fontSize: 18}}>
        Enter the number of ounces of milk you have:
      </Text>
      <TextInput
        style={{height: 32, backgroundColor: '#d3d3d3' }}
        keyboardType="number-pad"
        name="milk"
        defaultValue={milk}
        onChangeText={milk => setMilk(milk)}
      />
       <Text style={{padding: 10, fontSize: 18}}>
        Enter in the amount of milk you drink each day in ounces:
      </Text>
      <TextInput
        style={{height: 32, backgroundColor: '#d3d3d3' }}
        keyboardType="number-pad"
        name="milkConsumption"
        defaultValue={milkConsumption}
        onChangeText={milkConsumption => setMilkConsumption(milkConsumption)}
      />
      <Text>{"\n"}</Text>
      <Separator/>
      <Button
        title="submit"
        onPress={
          () => {
          eggs < 1 || eggConsumption < 1 || milk < 1 || milkConsumption < 1 ? Alert.alert("I need to know about your eggs and milk") : setSubmitted(true)
          }
        }
      />
      <Text>{"\n"}</Text>
      <View id="results" style={submitted ? {opacity:1} : {opacity:0}} >
        <Text style={{padding:12, fontSize:16}} >You will need to go to the store to get more eggs in {eggs/eggConsumption} days.</Text>
        <Text style={{padding:12, fontSize:16}}>You will need to go to the store to get more milk in {milk/milkConsumption} days.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default EggsAndMilk;
