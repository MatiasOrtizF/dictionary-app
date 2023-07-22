import {useState } from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import styles from '../Styled';
import { Audio } from "expo-av";

export default function Header(data) {
    const [play, setPlay] = useState(true);

    async function playAudio () {
        const { sound } = await Audio.Sound.createAsync(
            { uri: data.phonetics[0].audio }
        )
        await sound.playAsync();
        sound.setOnPlaybackStatusUpdate((status) => {
            if (status.isPlaying) {
                setPlay(false);
            } else {
                setPlay(true);
            }
        });
    }

    return (
            <View style={styles.header}>
                <View>
                    <Text style={{fontSize:25 , fontWeight:"bold"}}>{data.word}</Text>
                    <Text style={{color:"violet" , fontSize: 17 , fontWeight:400}}>{data.phonetic}</Text>
                </View>
                <TouchableWithoutFeedback onPress={play ?playAudio : null}>
                    {play?
                        <Image source={require('../../assets/play-icon.png')}></Image>
                    :
                        <Image source={require('../../assets/pause-icon.png')}></Image>
                    }
                </TouchableWithoutFeedback>
            </View>
    );
}