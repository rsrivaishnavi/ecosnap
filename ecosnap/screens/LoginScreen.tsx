import React,{useState}from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App'; 

const LoginScreen: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Login'>>();
    const [isOrganization, setIsOrganization] = useState<boolean>(false);
    return (
        <View style={styles.container}>
        <Text style={styles.title}>ECO SNAP</Text>
        <View style={styles.loginBox}>
            {/* Login Type Buttons */}
            <View style={styles.loginTypeContainer}>
                <TouchableOpacity 
                    style={[styles.loginTypeButton, !isOrganization && styles.selectedButton]} 
                    onPress={() => setIsOrganization(false)}
                >
                    <Text style={styles.loginTypeText}>User Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.loginTypeButton, isOrganization && styles.selectedButton]} 
                    onPress={() => setIsOrganization(true)}
                >
                    <Text style={styles.loginTypeText}>Organization Login</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.label}>Username</Text>
            <TextInput style={styles.input} placeholder="" placeholderTextColor="#78909C" />
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} placeholder="" secureTextEntry placeholderTextColor="#78909C" />
            
            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
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
    loginBox: {
        backgroundColor: '#90A4AE',
        width: '80%',
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5,
    },
    loginTypeContainer: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 20,
        justifyContent: 'space-around',
    },
    loginTypeButton: {
        backgroundColor: '#78909C',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
    },
    selectedButton: {
        backgroundColor: '#2c3e50', // Highlight color for selected button
    },
    loginTypeText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    label: {
        alignSelf: 'flex-start',
        fontSize: 16,
        color: '#37474F',
        marginBottom: 5,
    },
    input: {
        width: '100%',
        backgroundColor: '#CFD8DC',
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    loginButton: {
        marginTop: 10,
        backgroundColor: '#2c3e50',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 20,
    },
    loginText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default LoginScreen;
