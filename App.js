import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";

export default function App() {
    const [bgColor, setBgColor] = useState('fff');
    const onClick = () => {
        const color = Math.floor(Math.random()*16777215).toString(16);
        setBgColor(color)
    }
    console.log('#' + bgColor)
    return (
        <View style={styles({backgroundColor: bgColor}).container}>
            <Text>Любая надпись</Text>
            <Button onPress={onClick} title={'Нажми, чтобы показать оповещение'}/>
            <StatusBar style="auto" translucent={false}/>
        </View>
    );
}

const styles = (props) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#' + props.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
