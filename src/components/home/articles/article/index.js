import React from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-image'
import ContentShow from '../../../../utils/contentShow'

const ArticleScreen = () => {
    return(
        <ScrollView>
            <View>
                <Image 
                    src={{url: 'https://picsum.photos/200/300'}}
                    style={{width: '100%', height: 200}}
                    PlaceholderContent={<ActivityIndicator />}
                />
                <ContentShow />
            </View>
        </ScrollView>
    )
}

export default ArticleScreen;