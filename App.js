
import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'


export default function App() {

  const [goals, setGoals] = useState([])
  const [isModal, setIsModal] = useState(false)

  const addHandler = (text) => {
    setGoals([...goals, { id: Math.random().toString(), value: text }])
    setIsModal(false)
  }

  const removeGoal = id => {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id)
    })
  }


  const cancelInput = () => {
    setIsModal(false)
  }

  return (
    <View style={styles.container}>
      <Button title="Add new" onPress={() => setIsModal(true)} />
      <GoalInput onAddHandler={addHandler} visible={isModal} cancelInput={cancelInput} />
      <FlatList keyExtractor={(item, index) => item.id} data={goals} renderItem={itemData => (
        <GoalItem title={itemData.item.value} id={itemData.item.id} onDelete={removeGoal} />
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
})
