import { View , Text, StyleSheet} from "react-native"
import Date from "../components/ForMainScreen/Date";
import Search from "../components/ForMainScreen/Search";
import ShortInfo from "../components/ForMainScreen/ShortInfo";
import News from "../components/ForMainScreen/News";



function MainScreen(){
    return (
        <View style={styles.container}>
            <Date/>
            <Search/>
            <ShortInfo/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });

  
export default MainScreen