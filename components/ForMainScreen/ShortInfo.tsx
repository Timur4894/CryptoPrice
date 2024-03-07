import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, FlatList, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


function ShortInfo() {
  const [cryptoData, setCryptoData] = useState([]);
  const navigation: any = useNavigation()

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get('https://api.coincap.io/v2/assets?limit=10');
        setCryptoData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCryptoData();
  }, []);

  const renderItem = ({ item } : { item:any }) => {

    const priceChangePercent = parseFloat(item.changePercent24Hr);
    const priceChangeText = priceChangePercent > 0 ? `+${priceChangePercent.toFixed(2)}%` : `${priceChangePercent.toFixed(2)}%`;
    
    return (
      <Pressable onPress={()=>navigation.navigate('MoreInfo',  { cryptoName: item.name, cryptoFullName: item.symbol, price: item.priceUsd, priceChange: priceChangeText })} style={styles.Names}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={styles.mainName}>
              {item.symbol}
            </Text>
            <Text style={styles.fullName}>
              {item.name}
            </Text>
          </View>
          <View style={styles.containerForPrice}>
            <Text style={styles.price}>
              ${parseFloat(item.priceUsd).toFixed(2)}
            </Text>
            <View style={[styles.percentontainer, { backgroundColor: priceChangePercent > 0 ? '#008000' : '#ff0000' }]}>
                <Text style={styles.priceChange}>
                    {priceChangeText}
                </Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cryptoData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  percentontainer: {
    borderRadius: 5,
    marginTop: 1

  },
  containerForPrice: {
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  Names: {
    flexDirection: 'column',
    borderBottomColor: '#6e6e6e',
    borderBottomWidth: 1,
    marginBottom: 20
  },
  mainName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  fullName: {
    color: '#c9c9c9',
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical:10
  },
  price: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 'bold'
  },
  priceChange: {
    fontSize: 14,
    fontWeight: '500',
    color: "#fff",
    padding: 5,
    maxHeight: 40,
    maxWidth: 90
  }
});

export default ShortInfo;
