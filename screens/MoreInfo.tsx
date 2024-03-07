import React from 'react';
import { View, StyleSheet } from "react-native";
import NameOfCrypto from "../components/ForMoreInfo/NameOfCrypto";
import PriceAndInfo from '../components/ForMoreInfo/PriceAndInfo';
import Graphic from '../components/ForMoreInfo/Graphic';

function MoreInfo({ route } : {route:any}) { //???
    return (
        <View style={styles.container}>
            <NameOfCrypto route={route}/>
            <PriceAndInfo route={route}/>
            <Graphic route={route}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
});

export default (MoreInfo);
