import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, loadUser } from '../redux/action';

const Task = ({title, description, taskId}) => {
    const dispatch = useDispatch();

    const handleDelete = async() => {
        await dispatch(deleteTask(taskId));
        dispatch(loadUser());
    }
  return (
    <View style={{
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#9290C3",
        borderRadius: 10,
        marginHorizontal: 5,
        marginVertical: 10
    }}>
      <View style={{
        width: "70%"
      }}>
        <Text style={{fontWeight: "bold", fontSize: 18}}>{title}</Text>
        <Text>{description}</Text>
      </View>
      <TouchableOpacity onPress={handleDelete}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Task