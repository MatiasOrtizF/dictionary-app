import {useState } from 'react';
import { StyleSheet, Text , View , Image, TouchableWithoutFeedback } from 'react-native';

export default function Header(data) {
    const [play, setPlay] = useState(true);

    playAudio = () => {
        setPlay(!play)
    }

    return (
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
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-between",
        marginBottom: 15
    },
});