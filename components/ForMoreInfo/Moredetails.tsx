import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

function Moredetails({ route }: { route: any }) {
    const [details, setDetails] = useState<any>(null);

    const { cryptoName } = route.params;


    useEffect(() => {
        const fetchCryptoDetails = async () => {
            try {
                const response = await axios.get(`https://api.coincap.io/v2/assets/${cryptoName.toLowerCase()}`);
                setDetails(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCryptoDetails();
    }, [cryptoName]);

    const formatNumber = (num: number) => {
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1) + ' billion';
        } else if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + ' million';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + ' thousand';
        } else {
            return num;
        }
    };

    return (
        <View style={styles.container}>
            {details && (
                <View style={{ flexDirection: 'row' }}>
                    {/* <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.text}>Maximum</Text>
                            <Text style={styles.value}>{formatNumber(details.high24hr)} </Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.text}>Minimum</Text>
                            <Text style={styles.value}>{formatNumber(details.low24hr)}</Text>
                        </View>
                    </View> */}

                    <View style={styles.line}></View>

                    <View style={styles.rightCol}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.text}>Volumes</Text>
                            <Text style={styles.value}>{formatNumber(details.volumeUsd24Hr)}</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.text}>Capitalization</Text>
                            <Text style={styles.value}>{formatNumber(details.marketCapUsd)}</Text>
                        </View>
                    </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 10
    },
    text: {
        color: '#828282',
        marginRight: 12,
        fontSize: 14
    },
    value: {
        color: '#fff',
        fontSize: 14
    },
    rightCol: {
        flexDirection: 'column',
    },
    line: {
        borderLeftWidth: 1,
        borderLeftColor: '#606060',
        marginLeft: 5,
        marginRight: 5
    }
});

export default Moredetails;
