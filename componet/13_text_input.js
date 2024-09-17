import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Text_input = () => {
    const [msg, setMsg] = useState();

    return (
        <View>
            <Text style={{ fontSize: 35 }}>
                Using TEXT input
            </Text>

            <Text style={{ fontSize: 20 }}>
                Print my msg = {msg}
            </Text>

            <TextInput
                style={style.inputstyle}
                placeholder='Enter your name'
                onChangeText={(text) => { setMsg(text) }}
            />
        </View>
    );
}

const style = StyleSheet.create({
    inputstyle: {
        borderColor: 'red',
        borderWidth: 2,
        height: 40,
        paddingLeft: 10,
        margin: 20
    }
})

export default Text_input;
