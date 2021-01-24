import React from 'react'
import { View, Text, ScrollView, Stylesheet } from 'react-native'

const ContentShow = () => {
    const text = `<p>Consectetur dolor ullamco deserunt adipisicing proident elit sint commodo duis sunt. Elit magna non anim velit sunt quis quis culpa culpa laboris fugiat. Esse duis irure duis qui officia occaecat consectetur ullamco labore eiusmod laboris ullamco esse deserunt. Sunt minim incididunt quis occaecat incididunt cupidatat amet exercitation excepteur ea aliquip elit. Duis deserunt ad aliquip incididunt qui qui enim tempor quis et Lorem nulla aliqua sit. Magna ad nisi aliqua irure Lorem tempor aute eiusmod nulla in excepteur amet mollit sit. Non enim non in ex sint pariatur.</p>
    <p>Ut reprehenderit laboris ipsum duis commodo quis commodo amet reprehenderit aute consectetur. Eu sint est ipsum id minim proident enim excepteur sint Lorem. Officia sint sunt occaecat occaecat consequat sint id ea culpa. Reprehenderit cillum sint pariatur nulla Lorem ipsum. Deserunt incididunt pariatur reprehenderit laborum dolore eiusmod pariatur aute ut laboris irure. Laborum cupidatat laboris aliqua irure. Laboris eiusmod eu fugiat laborum Lorem do excepteur eiusmod dolore tempor sit minim.</p>
    <p>Aliquip aute dolore eu labore occaecat nostrud. Ullamco consequat duis sint aliquip incididunt aliqua. Reprehenderit nulla consequat sit cupidatat reprehenderit. Sunt labore elit culpa consequat nostrud. Culpa deserunt occaecat consectetur ad ea excepteur deserunt incididunt proident veniam. Enim voluptate consectetur cillum anim sunt.</p>`
    return(
        <View>
            <View style={{padding: 10}}>
                <Text style={styles.articleTitle}>
                    Consectetur excepteur excepteur officia et non excepteur adipisicing minim incididunt occaecat ad occaecat elit. Velit exercitation commodo Lorem aliqua magna mollit fugiat aliquip aliqua veniam. Adipisicing elit voluptate dolor cupidatat id esse do magna. Laborum velit adipisicing nulla commodo pariatur non consequat proident qui adipisicing magna. Officia voluptate in id consequat ullamco ea eu enim amet adipisicing incididunt consequat. Qui ipsum ea exercitation nostrud quis eiusmod. Nulla amet ullamco consequat ut occaecat reprehenderit ex commodo qui reprehenderit.
                </Text>
                <Text style={styles.articleContent}>
                {text.replace(/<p>/g, "").replace(/</p>/g, "\n\n")}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    articleTitle: {
        fontSize: 30,
        marginBottom: 30,
        fontWeight: 300,
        color: '#444444'
    },
    articleContent: {
        fontSize: 18,
        color: '#444444'
    }
    
})

export default ContentShow