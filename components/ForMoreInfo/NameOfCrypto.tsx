import { View , Text, StyleSheet} from "react-native"

function NameOfCrypto({route} : {route : any}){  //???

    const { cryptoName, cryptoFullName } = route.params;    


    return (
        <View style={styles.container}>
            <View style={styles.maincontainert}>
                <View style={{marginVertical: 15}}>
                    <Text style={{color: '#FFF', fontSize: 26, fontWeight: 'bold'}}>
                        {cryptoFullName}
                    </Text>
                </View>

                <View style={{ marginLeft: 15, marginVertical: 32}}>
                    <Text style={{color: '#515151', fontSize: 12, fontWeight: 'bold'}}>
                        {cryptoName}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    maincontainert: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#6e6e6e',
        marginHorizontal: 15
    },


  });

  
export default NameOfCrypto