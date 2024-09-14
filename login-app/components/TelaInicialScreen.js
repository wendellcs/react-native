import { View, Text, StyleSheet} from "react-native-web";

export default function TelaInicialScreen({route}){
    const {email} = route.params

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>
                Bem-vindo, {email}!
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold'
    }
})