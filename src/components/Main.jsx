import {useState } from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, TextInput, TouchableOpacity, View , ScrollView , Linking} from 'react-native';
import DefinitionItems from './Definition-items'

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
        <ScrollView style={{marginTop: Constants.statusBarHeight}}>
            <View style={styles.container}>  

                <TextInput 
                    onChangeText={setWord}
                    style={styles.input}
                    placeholder='keyboard'
                    onSubmitEditing={searchWord}
                />

                {datas.map((data,index) => (
                    <DefinitionItems {...data}
                    key={index}
                    />
                ))}

                {datas.length > 0 ?
                <>
                    <View style={{ backgroundColor: 'gray', height: 0.5}} />
                    <Text style={{color:"gray"}}>Source</Text>
                    <TouchableOpacity onPress={()=> openURL(datas[0].sourceUrls[0])}>
                        <Text style={{textDecorationLine:'underline'}}>{datas[0].sourceUrls[0]}</Text>   
                    </TouchableOpacity> 
                </>
                :
                null
                }

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        margin: 30
    },
    input: {
        backgroundColor: "#DFDFDF", 
        width: "100%", 
        borderRadius: 10, 
        paddingVertical: 5, 
        paddingHorizontal: 15,
        marginBottom: 15
    },
});