import React, { useState, useEffect } from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import axios from 'axios';

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
                    chartConfig={{
                        backgroundColor: "#1f1f1f",
                        backgroundGradientFrom: "#1f1f1f",
                        backgroundGradientTo: "#1f1f1f",
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726",
                        },
                    }}
                    bezier
                    style={styles.chart}
                />
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    chart: {
        marginVertical: 8,
        borderRadius: 16,
    },
});

export default Graphic;
