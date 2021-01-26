import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Appbar, TextInput, Divider, Button, Title } from 'react-native-paper'


const ProfileScreen = () => {
    return(
        <ScrollView>
            <Appbar.Header>
                <Appbar.BackAction onPress={()=> alert('back')} />
                <Appbar.Content title='Profile' subtitle='Feedly' />
            </Appbar.Header>
            <View style={{padding: 20}}>
                <TextInput 
                    label='Email'
                    value={''}
                    onChangeText={text => console.log(text)}
                    mode='outlined'
                />
                <TextInput 
                    label='password'
                    value={''}
                    onChangeText={text => console.log(text)}
                    mode='outlined'
                />
                <Button
                    mode='contained'
                    onPress={() => console.log('pressed')}
                >
                Update
                </Button>

            </View>
        </ScrollView>
    )
}

export default ProfileScreen;