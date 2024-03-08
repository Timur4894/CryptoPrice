// import React from 'react';
// import { View, Text, StyleSheet } from "react-native";

// function PriceAndInfo({ route }: { route: any }) {
//     const { price, priceChange } = route.params;
//     const integerPrice = Math.floor(price);


//     return (
//         <View style={styles.container}>
//             <View style={{marginHorizontal: 15, paddingBottom: 15, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1,
//         borderBottomColor: '#505050'}}>
//                 <View>
//                     <Text style={styles.price}>
//                         {integerPrice} $
//                     </Text>
//                 </View>

//                 <View style={{marginLeft: 10}}>
//                     <Text style={[styles.priceChange, { color: parseFloat(priceChange) > 0 ? '#008000' : '#ff0000' }]}>
//                         {priceChange}
//                     </Text>
//                 </View>
               
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     price: {
//         color: "#fff",
//         fontSize: 16, 
//         fontWeight: 'bold'
//     }, 
//     priceChange: {
//         fontSize: 12, 
//         fontWeight: 'bold'
//     }
// });

// export default PriceAndInfo;
