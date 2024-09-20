import { View, Text} from "react-native-web";
import { styles } from "./styles";

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
