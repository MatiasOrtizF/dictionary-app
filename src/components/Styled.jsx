import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        margin: 30,
        backgroundColor:"#EEEEEE"
    },
    input: {
        backgroundColor: "#D6D6D6", 
        width: "100%", 
        borderRadius: 10, 
        paddingVertical: 5, 
        paddingHorizontal: 15,
        marginBottom: 15
    },
    header: {
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-between",
        marginBottom: 15
    },
    partOfSpeech: {
        fontSize: 17, 
        fontWeight:"bold"
    },
    title: {
        color:"gray", 
        fontSize: 15
    },
    point: { 
        fontSize: 17, 
        fontWeight:"bold", 
        color:"violet", 
        marginRight:5
    },
    example: {
        marginVertical: 5, 
        color:"gray", 
        marginLeft: 7
    },    
    synonyms: {
        color:"violet", 
        marginLeft:10, 
        fontWeight:700
    },
    hr: { 
        backgroundColor: 'gray', 
        height: 0.5
    },
});

export default styles;