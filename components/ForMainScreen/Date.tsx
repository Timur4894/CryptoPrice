import { View , Text, StyleSheet, TextInput} from "react-native"
import { Ionicons } from "@expo/vector-icons";
import moment from 'moment'; 

function Date(){
    const now = moment().format("D");
    const month = moment().format("MM");
    console.log(month)

    return (
        <View style={styles.container}>
                <Text style={styles.text}>
                    Crypto
                </Text>
                <Text style={styles.date}>
                    {now}.{month}
                </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      marginRight: '70%'
    },
    text: {
        color: 'white',
        marginTop: 40,
        fontSize: 22,
        fontWeight: 'bold'
    },
    date: {
        color: '#a2a2a2',
        fontSize: 22,
        fontWeight: 'bold'
    }
  });

  
export default Date