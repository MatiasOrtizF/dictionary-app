import { StatusBar } from 'expo-status-bar';
import {useState } from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, TextInput, TouchableOpacity, View , ScrollView , Image, TouchableWithoutFeedback, Linking} from 'react-native';

export default function App() {

    const [datas, setDatas] = useState([]);
    const [word, setWord] = useState('');

    const [play, setPlay] = useState(true);

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
        console.log(datas.length)
    }

    playAudio = () => {
        setPlay(!play)
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
                { datas.length == 1?
                    datas.map((data,index) => (
                        <View>
                            <View style={styles.header}>
                                <View>
                                    <Text style={{fontSize:25 , fontWeight:"bold"}}>{data.word}</Text>
                                    <Text style={{color:"violet" , fontSize: 17 , fontWeight:400}}>{data.phonetic}</Text>
                                </View>
                                <TouchableWithoutFeedback onPress={playAudio}>
                                    {play?
                                        <Image source={require('../../assets/play-icon.png')}></Image>
                                        :
                                        <Image source={require('../../assets/pause-icon.png')}></Image>
                                    }
                                </TouchableWithoutFeedback>
                            </View>

                            <View style={{ backgroundColor: 'gray', height: 0.5}} />

                            <View>
                                <Text>{data.meanings[0].partOfSpeech}</Text>
                            </View>
                            <View style={{marginVertical: 20}}>

                                <Text style={{color:"gray"}}>Meaning</Text>
                                <View style={{marginVertical: 5}}>

                                    {data.meanings[0].definitions.map((def) => (
                                        <View style={{flexDirection:"row"}}>

                                        {/* <Text style={{color:"violet" , fontSize:30 , justifyContent:"flex-start" , marginRight: 15}}>.</Text> */}
                                        <Text style={{marginVertical: 5}}>{def.definition}</Text>

                                        </View>
                                    ))}
                                
                                </View>
                                <View style={{flexDirection:"row" , marginTop: 8}}>
                                    <Text style={{color:"gray"}}>Synonyms</Text>
                                    <Text style={{color:"violet" , marginLeft:10 , fontWeight:700}}>{data.meanings[0].synonyms}</Text>
                                </View>

                            </View>
                            
                            <View style={{ backgroundColor: 'gray', height: 0.5}} />

                                <Text>{data.meanings[1].partOfSpeech}</Text>
                                <View style={{marginVertical: 20}}>
                                    <Text style={{color:"gray"}}>Meaning</Text>
                                    {data.meanings[1].definitions.map((def) => (
                                        <View style={{marginVertical: 5}}>
                                            {/* <Text style={{color:"violet" , fontSize:45, marginRight: 15}}>.</Text> */}
                                            <Text style={{marginVertical: 5}}>{def.definition}</Text>
                                            {def.example?
                                                <Text style={{color:"gray"}}>"{def.example}"</Text>
                                                :
                                                null
                                            }
                                        </View>
                                    ))}
                                </View>
                            <View style={{ backgroundColor: 'gray', height: 0.5}} />
                            <Text style={{color:"gray"}}>Source</Text>
                            <TouchableOpacity onPress={()=> openURL(data.sourceUrls[0])}>
                                <Text style={{textDecorationLine:'underline'}}>{data.sourceUrls[0]}</Text>   
                            </TouchableOpacity>
                        </View>
                ))
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
        paddingHorizontal: 15
    },
    header: {
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-between",
        marginVertical: 15
    },
});