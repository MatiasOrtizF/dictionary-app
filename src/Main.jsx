import {useState } from 'react';
import Constants from 'expo-constants';
import { Text, TextInput, TouchableOpacity, View, ScrollView, Linking, SafeAreaView, Platform } from 'react-native';
import DefinitionItems from './components/Definition-items'
import styles from './Styled';

export default function Main() {

    const [datas, setDatas] = useState([]);
    const [word, setWord] = useState('');

    openURL = (url) => {
        Linking.openURL(url)
    }

    searchWord = () => {
        if(word.trim()) {
            fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+word)
                .then(response => response.json())
                .then(data => {
                    setDatas(data);
                })
        }
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView style={{marginTop: Platform.OS === "android" && Constants.statusBarHeight , backgroundColor:"#EEEEEE"}}>
                <View style={styles.container}>  

                    <TextInput 
                        onChangeText={setWord}
                        style={styles.input}
                        placeholder='keyboard'
                        onSubmitEditing={searchWord}
                    />

                    {datas?.map((data, index) => (
                        <DefinitionItems {...data}
                        key={index}
                        />
                    ))}

                    {datas?.length > 0 ?
                        <>
                            <View style={styles.hr}/>
                            <Text style={styles.title}>Source</Text>
                            <TouchableOpacity onPress={()=> openURL(datas[0].sourceUrls[0])}>
                                <Text style={{textDecorationLine:'underline'}}>{datas[0].sourceUrls[0]}</Text>   
                            </TouchableOpacity> 
                        </>
                    :
                        null
                    }

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}