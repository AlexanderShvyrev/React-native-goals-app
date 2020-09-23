import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const GoalItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.goals}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    goals: {
        padding: 10,
        margin: 5,
        borderColor: '#ff5722',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#dd2c00',
        color: "white"
    }
})

export default GoalItem
