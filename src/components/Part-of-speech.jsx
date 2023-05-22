import { Text , View } from 'react-native';
import styles from './Styled';
import DefinitionList from './Definition-list';

export default function PartOfSpeech(data) {
    return (
            <View>
                <View style={styles.hr}/>
                <Text style={styles.partOfSpeech}>{data.partOfSpeech}</Text>
                <View style={{marginVertical: 20}}>
                    <Text style={styles.title}>Meaning</Text>
                        <View style={{marginVertical: 5}}>

                            {data.definitions.map((def) => (
                                <DefinitionList {...def}/>
                            ))}   

                        </View>
                        <View style={{flexDirection:"row" , marginTop: 8}}>
                            {data.synonyms.length > 0 ? 
                                <View style={{flexDirection:"row"}}>
                                    <Text style={styles.title}>Synonyms</Text>
                                    <Text style={styles.synonyms}>{data.synonyms + " "}</Text>
                                </View>
                                :
                                null
                            }
                        </View>
                </View>
            </View>
    );
}