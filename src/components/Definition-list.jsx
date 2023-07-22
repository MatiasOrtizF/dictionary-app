import { Text , View } from 'react-native';
import styles from '../Styled';

export default function DefinitionList(def) {
    return (
            <View>
                <View style={{flexDirection:"row"}}>
                    <Text style={styles.point}>.</Text>
                    <Text style={{marginVertical: 5}}>{def.definition}</Text>
                </View>
                    {def.example?
                        <Text style={styles.example}>"{def.example}"</Text>
                    :
                        null
                    }
            </View>
    );
}