import React, { useState, useEffect } from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import axios from 'axios';
import { Ionicons } from "@expo/vector-icons";


function Graphic({ route }: {route:any}) {



    const { cryptoName } = route.params;    
    const [priceHistory, setPriceHistory] = useState([]);
    const name = cryptoName.toLowerCase()
    console.log(name)


    useEffect(() => {
        const fetchPriceHistory = async () => {
            try {
                const response = await axios.get(`https://api.coincap.io/v2/assets/${name}/history?interval=d1`);
                setPriceHistory(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPriceHistory();
    }, [cryptoName]);

    const chartData = {
        labels: priceHistory.map(entry => entry.date),
        datasets: [
            {
                data: priceHistory.map(entry => parseFloat(entry.priceUsd)),
            },
        ],
    };

    return (
        <View style={styles.container}>
            {priceHistory.length > 0 ? (
                <LineChart
                data={chartData}
                width={Dimensions.get('window').width - 30}
                height={320} 
                yAxisLabel="$"
                withVerticalLabels={false}
                chartConfig={{
                    backgroundColor: "#1f1f1f",
                    backgroundGradientFrom: "#242424",
                    backgroundGradientTo: "#242424",
                    decimalPlaces: 1,

                    color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    propsForDots: {
                        r: "1",
                        strokeWidth: "1",
                        stroke: "#51ff26",
                    },
                    propsForBackgroundLines: {
                        stroke: "#393939"
                    },
                }}
                bezier
                style={styles.chart}
            />
            
            ) : (
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
                    Loading...
                </Text>
            )}


            
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -20,
        marginBottom: -180
    },
    chart: {
        marginVertical: 8,
        borderRadius: 7,
    },
});

export default Graphic;
