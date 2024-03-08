import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

function NameOfCrypto({ route }: { route: any }) {
    const navigation: any = useNavigation();
    const { cryptoName, cryptoFullName } = route.params;
    const { price, priceChange } = route.params;
    const integerPrice = Math.floor(price);

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={{ marginVertical: 15 }}>
                    <Text style={{ color: '#FFF', fontSize: 26, fontWeight: 'bold' }}>
                        {cryptoFullName}
                    </Text>
                </View>
                <View style={{ marginLeft: 15, marginVertical: 32 }}>
                    <Text style={{ color: '#515151', fontSize: 12, fontWeight: 'bold' }}>
                        {cryptoName}
                    </Text>
                </View>
                <View style={styles.closeButtonContainer}>
                    <Pressable onPress={() => navigation.navigate('MainScreen')}>
                        <Ionicons name='close' size={24} color="#fff" />
                    </Pressable>
                </View>
            </View>
            <View style={styles.containerForPrice}>
                <View>
                    <Text style={styles.price}>
                        {integerPrice} $
                    </Text>
                </View>
                <View style={{ marginLeft: 10 }}>
                    <Text style={[styles.priceChange, { color: parseFloat(priceChange) > 0 ? '#008000' : '#ff0000' }]}>
                        {priceChange}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 30
    },
    mainContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#6e6e6e',
        marginHorizontal: 15,
        marginBottom: 18
    },
    closeButtonContainer: {
        position: 'absolute',
        top: 12,
        right: 0,
        paddingHorizontal: 10,
        paddingTop: 10
    },
    price: {
        color: "#fff",
        fontSize: 16,
        fontWeight: 'bold'
    },
    priceChange: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    containerForPrice: {
        marginHorizontal: 15,
        paddingBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#505050',
        marginBottom: 20
    }
});

export default NameOfCrypto;
