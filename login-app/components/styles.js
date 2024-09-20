import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#48305B'
    },
    form: {
        width: '80%',
        paddingVertical: 30,
        paddingHorizontal: 20,
        backgroundColor: 'rgba(213, 172, 243, 0.15)',
        borderRadius: 4,
        border: '1px solid rgba(213, 172, 243, 0.4)',
        borderRadius: 24

    },
    title:{
        textAlign:'center',
        marginBottom: 30,
        fontSize: 22,
        fontWeight: 'bolder',
        color: '#FFF',

    },
    label: {
        fontSize: 16,
        marginBottom: 10,
        color: '#fff',
        letterSpacing: 1
    },
    input: {
        borderWidth: 1,
        borderColor: 'rgba(213, 172, 243, 0.4)',
        padding: 8,
        marginBottom: 16,
        borderRadius: 4,
        color: '#FFF',
        width: '100%'
    },
    inputError: {
        borderColor: 'rgba(250, 0, 0, 0.4)'
    },
    btn: {
        color: '#fff',
        backgroundColor: 'rgba(213, 172, 243, 0.3)',
        padding: 10,
        borderRadius: 4,
        marginTop: 16,
        alignItems: 'center',
        width: 150,
        margin: 'auto',
        border: '1px solid rgb(213, 172, 243)',
        borderRadius: 12

    },
    btnText: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing: 1
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    }
})