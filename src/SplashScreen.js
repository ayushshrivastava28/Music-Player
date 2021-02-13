import React, { useEffect } from 'react'
import { View, StyleSheet, Image } from 'react-native'

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        navigateToHome()
    }, [])

    const navigateToHome = async () => {
        const wait = time => new Promise((resolve) => setTimeout(resolve, time))
        return wait(3000).then(() => navigation.navigate('MusicScreen'))
    }
    return (
        <View style={styles.container}>
            <Image source={require('./assets/musicSplash.png')} style={styles.image} />
        </View>
    )
}
export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    image: {
        width: '100%',
        height: '100%',
    }
})