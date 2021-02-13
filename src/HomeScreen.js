import React from 'react'
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native'

const HomeScreen = ({ navigation }) => {
    return (
        <>
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('SplashScreen')}>
                <Image source={require('./assets/musiclogo.jpg')} style={styles.image} />
                <Text style={{ fontSize: 30, color: '#fff' }}>Touch Me</Text>
            </TouchableOpacity>
        </>
    )
}
export default HomeScreen
const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2f3133',
        flex: 1
    },
    image: {
        height: '30%',
        width: '50%'

    }
})