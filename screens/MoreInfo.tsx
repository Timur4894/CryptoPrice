import React from 'react';
import { View, StyleSheet, ScrollView } from "react-native";
import NameOfCrypto from "../components/ForMoreInfo/NameOfCrypto";
import Graphic from '../components/ForMoreInfo/Graphic';

import Moredetails from '../components/ForMoreInfo/Moredetails';
import News from '../components/ForMainScreen/News';

function MoreInfo({ route } : {route:any}) { //???
    return (
        <View style={styles.container}>
            <NameOfCrypto route={route}/>
            <Graphic route={route}/>
            <Moredetails route={route}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
});

export default (MoreInfo);
