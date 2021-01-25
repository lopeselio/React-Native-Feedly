import React from 'react';
import { View, Text, Button, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import { Tile } from 'react-native-elements'

const VideosScreen = ({navigation}) => {
    const renderVideos = () => (
        <Tile 
            imageSrc={{uri:'https://picsum.photos/200/300'}}
            title='Deserunt culpa enim enim aliquip irure magna aliquip culpa'
            icon = {{name:'play-circle', type: 'font-awesome', color:'#fff', size:50 }}
            contentContainerStyle={StyleSheet.contentContainerStyle}
            containerStyle={styles.containerStyle}
            titleStyle={{fontSize: 15}}
        />
    )

    return(
        <ScrollView>
            <View>
                {renderVideos()}
            </View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    contentContainerStyle: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e1e8ee',
        shadowColor: 'rgba(0,0,0,.2)'
    },
    containerStyle: {
        width: '100%',
        height: 250,
        marginBottom: 15
    }
})

export default VideosScreen;