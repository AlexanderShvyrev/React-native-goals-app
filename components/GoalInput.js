import React, { useState } from 'react'
import { View, Button, StyleSheet, TextInput, Modal } from 'react-native'

const GoalInput = (props) => {
    const [enteredText, setEnteredText] = useState('')

    const inputHandler = (input) => {
        setEnteredText(input)
    }
    const addGoalHandler = () => {
        props.onAddHandler(enteredText)
        setEnteredText('')
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer} >
                <TextInput placeholder="Add goal..." style={styles.input} value={enteredText} onChangeText={inputHandler} />
                <View style={styles.buttons}>
                    <Button title="Add" onPress={addGoalHandler} />
                    <Button title="Cancel" color="red" onPress={props.cancelInput} />
                </View>
            </View>
        </Modal>
    )
}



const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    input: {
        borderColor: '#00bcd4',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        width: '80%',
        marginBottom: 10
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "40%"
    }
})


export default GoalInput
