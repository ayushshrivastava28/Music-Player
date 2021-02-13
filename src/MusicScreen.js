import React, { useState, useEffect } from 'react'
import { View, Image, ScrollView, ActivityIndicator, SafeAreaView, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native'
const MusicScreen = ({ navigation }) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://itunes.apple.com/search?term=Michael+jackson`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        }).then((res) =>
            res.json()
        ).then((res) => {
            setData(res.results)
            setIsLoading(false)
        }).catch((e) => {
            console.log(e)
        })

    }, [])
    // console.log("data: ", data)
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    {isLoading && <ActivityIndicator style={{ marginTop: 100 }} size='large' color='#38ACEC' />}
                    {
                        data.map((category, index) => {
                            return <View key={index}>
                                <TouchableOpacity onPress={() => { navigation.navigate('MusicDetails', category) }}>
                                    <View style={{
                                        flexDirection: 'row', justifyContent: 'center',
                                        margin: 10, padding: 4, borderRadius: 5, backgroundColor: 'white'
                                    }}>
                                        <View style={{ alignContent: 'center', justifyContent: 'center' }}>
                                            <Image source={{ uri: category.artworkUrl100 }} style={{ width: 160, height: 180, borderRadius: 10 }} />
                                        </View>
                                        <View style={{ width: '50%', margin: 10 }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={{ fontSize: 25 }}>{category.trackCensoredName} </Text>
                                            </View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={{ fontSize: 18 }}>{category.collectionCensoredName}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 40 }}>
                                                <Text style={{ fontSize: 18, letterSpacing: 2, fontWeight: 'bold' }}>{category.artistName} </Text>
                                                <Text style={{ fontSize: 18 }}>{Math.floor((category.trackTimeMillis) / (60 * 1000))}m</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        })
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default MusicScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 30
    },
    text: {
        color: '#181818',
        fontSize: 20,
        marginLeft: '3%',
        marginTop: '5%'
    },
    itemImage: {
        width: 120,
        height: 150,
        marginLeft: 10,
        borderRadius: 5
    }
})