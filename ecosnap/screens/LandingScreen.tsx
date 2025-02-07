import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';  

type NavigationProp = StackNavigationProp<RootStackParamList, 'Landing'>;

const LandingScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp>(); // 

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.ecoText}>ECO</Text>
                <View style={styles.circle} />
                <Text style={styles.snapText}>SNAP</Text>
            </View>
            <TouchableOpacity 
                style={styles.loginButton} 
                onPress={() => navigation.navigate('Login')}  // ✅ Ensure this matches `App.tsx`
            >
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <View style={styles.bottomSection} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b0c4de',
    },
    topSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    ecoText: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#2c3e50',
    },
    snapText: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#2c3e50',
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#34495e',
        marginHorizontal: 10,
    },
    loginButton: {
        marginTop: 20,
        backgroundColor: '#2c3e50',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 20,
    },
    loginText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    bottomSection: {
        position: 'absolute',
        bottom: 20,
        width: '80%',
        height: 100,
        backgroundColor: '#34495e',
        borderRadius: 10,
    },
});

export default LandingScreen;