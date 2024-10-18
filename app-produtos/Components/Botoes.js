import { TouchableOpacity, Text, StyleSheet} from "react-native";

export default function BotaoCustomizado({title, onPress, padding, marginLeft, marginTop}){
    return (
        <TouchableOpacity style={[style.btn, {paddingHorizontal: padding|| 0}, {marginLeft: marginLeft || 0}, {marginTop: marginTop || 0}]} onPress={onPress}>
            <Text style={style.btnText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    btn: {
        alignItems: 'center',
        fontSize: 18,
        backgroundColor: '#E66337',
        borderRadius: 12
    }, 
    btnText: {
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 1,
        marginVertical: 8,
    }
})