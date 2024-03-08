import { View , Text, StyleSheet, TextInput, Pressable} from "react-native"
import moment from 'moment'; 
import { useNavigation } from '@react-navigation/native';

function Date(){
    const now = moment().format("D");
    const month = moment().format("MMMM");
    console.log(month)

    const navigation: any = useNavigation()


    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>
                    Crypto
                </Text>
                <Text style={styles.date}>
                    {now} {month}
                </Text>
            </View>
                
            <View style={styles.news}>
                <Pressable onPress={()=>navigation.navigate('News')}>
                    <Text style={{color: '#a2a2a2', fontSize: 20, fontWeight: 'bold'}}>
                        News
                    </Text>
                </Pressable>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      marginRight: '70%',
      flexDirection: 'row',
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
    },
    news: {
        position: 'absolute',
        top: 72,
        left: 290,
    }
  });

  
export default Date