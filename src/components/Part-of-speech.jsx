import { Text , View } from 'react-native';

export default function DefinitionItems(data) {
    return (
            <View>
                <View style={{ backgroundColor: 'gray', height: 0.5}} />
                <Text style={{fontSize: 17 , fontWeight:"bold"}}>{data.partOfSpeech}</Text>
                <View style={{marginVertical: 20}}>
                    <Text style={{color:"gray" , fontSize: 15}}>Meaning</Text>
                        <View style={{marginVertical: 5}}>
                            {data.definitions.map((def) => (
                                <View>
                                    <View style={{flexDirection:"row"}}>
                                        <Text style={{ fontSize: 17 , fontWeight:"bold" , color:"violet" , marginRight: 5}}>.</Text>
                                        <Text style={{marginVertical: 5}}>{def.definition}</Text>
                                    </View>
                                    {def.example?
                                        <Text style={{marginVertical: 5 , color:"gray" , marginLeft: 7}}>"{def.example}"</Text>
                                        :
                                        null
                                    }
                                </View>
                            ))}   
                        </View>
                        <View style={{flexDirection:"row" , marginTop: 8}}>
                            {data.synonyms.length > 0 ? 
                                <View style={{flexDirection:"row"}}>
                                    <Text style={{color:"gray" , fontSize: 15}}>Synonyms</Text>
                                    <Text style={{color:"violet" , marginLeft:10 , fontWeight:700}}>{data.synonyms + " "}</Text>
                                </View>
                                :
                                null
                            }
                        </View>
                </View>
            </View>
    );
}