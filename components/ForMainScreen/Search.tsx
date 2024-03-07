import { View, TextInput, StyleSheet} from "react-native"
import { Ionicons } from "@expo/vector-icons";


function Search(){
    return(
        <View style={styles.searchContainer}>
                <Ionicons name="search" size={24} color="#bebebe" style={styles.icon} />
                <TextInput
                placeholder="Search"
                placeholderTextColor="#bebebe"
                style={styles.input}
                />
        </View>
    )
}


const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#282828d1',
        borderRadius: 7,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop: 15,
        marginBottom: -20
      },
    icon: {
        marginRight: 5,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: 'black',
    },

  });
  
export default Search;