import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default ({ navigation, route }) => {
    const Details = route.params
    // console.log("details: ", Details)
    return <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.9)' }}>
        <View style={{ width: '30%', alignSelf: 'flex-start' }}>
            <Ionicons name="md-arrow-back" size={32} color='#fff' onPress={() => navigation.goBack()} />
        </View>
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 50 }}>
            <Image source={{ uri: Details.artworkUrl100 }} style={{ width: 300, height: 300, borderRadius: 10 }} />
        </View>
        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 50 }}>
            <Text style={{ fontSize: 20, color: '#fff' }}>{Details.artistName}</Text>
            <Text style={{ fontSize: 20, color: '#fff' }}>{Details.collectionCensoredName}</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <TouchableOpacity><AntDesign name='stepbackward' size={30} color='#fff' /></TouchableOpacity>
            <TouchableOpacity><AntDesign name='play' size={30} color='#fff' /></TouchableOpacity>
            <TouchableOpacity><AntDesign name='stepforward' size={30} color='#fff' /></TouchableOpacity>
        </View>
    </View >
}
