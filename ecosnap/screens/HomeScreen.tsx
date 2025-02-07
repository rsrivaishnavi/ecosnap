import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App'; 

const HomeScreen: React.FC = () => {
      const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>ECO SNAP</Text>
            <Text style={styles.greeting}>Hello Username</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Scan Plastic</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Your Impact</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Rewards</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Heat')}>
                <Text style={styles.buttonText}>HeatMap</Text>
            </TouchableOpacity>
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2c3e50',
        position: 'absolute',
        top: 40,
    },
    greeting: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#90A4AE',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25,
        marginVertical: 10,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#2c3e50',
        fontWeight: 'bold',
    },
});

export default HomeScreen;