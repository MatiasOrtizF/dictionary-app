import { View } from 'react-native';
import PartOfSpeech from './Part-of-speech'
import Header from './header'

export default function DefinitionItems(data) {
    return (
            <View>
                <Header {...data}/>

                <View style={{ backgroundColor: 'gray', height: 1}} />

                {data.meanings.map((data) => (
                    <PartOfSpeech {...data}
                    />
                ))}
            </View>
    );
}