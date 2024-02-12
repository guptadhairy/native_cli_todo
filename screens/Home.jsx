import {View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import Task from '../components/Task';
import {Button, Dialog} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser, newTask } from '../redux/action';

const Home = () => {
  const dispatch = useDispatch();

  const {user} = useSelector(state=>state.auth)
  const [openDialog, setOpenDialog] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const hideDailog = () => {
    setOpenDialog(!openDialog)
  }
  const addTask = async()=> {
    await dispatch(newTask(title, description));
    dispatch(loadUser());
  }
  return (
    <>
      <View>
        <ScrollView>
          { user && user.tasks.map((item)=> (
            <Task key={item._id} title={item.title} description={item.description} taskId={item._id} />
          ))}
          <View
            style={{
              alignItems: 'center',
              marginVertical: 10
            }}>
            <Button style={{width: '70%', backgroundColor: 'brown'}} onPress={hideDailog}>
              <Text style={{color: 'white'}}>Add Task</Text>
            </Button>
          </View>
        </ScrollView>
      </View>
      <Dialog visible={openDialog} onDismiss={hideDailog}>
        <Dialog.Title>Add a Task</Dialog.Title>
        <Dialog.Content>
          <TextInput style={Styles.input} placeholder='Title' value={title} onChangeText={setTitle}/>
          <TextInput style={Styles.input} placeholder='Description' value={description} onChangeText={setDescription} />
          <View style={{flexDirection: "row", alignItems: "center"}}> 
            <TouchableOpacity onPress={hideDailog}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <Button disabled={!title || !description} onPress={addTask}>
              <Text>Add</Text>
            </Button>
          </View>
        </Dialog.Content>
      </Dialog>
    </>
  );
};

export default Home;

const Styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#b5b5b5",
    padding: 10,
    paddingLeft: 15,
    borderRadius: 5,
    marginVertical: 10,
    fontSize: 15,
}
})
