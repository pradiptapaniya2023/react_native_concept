import React, { useRef } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const Refrn = () => {
    const input = useRef();

    const refFun = () => {
        console.warn("Funcation is call");
        //focus
        input.current.focus();

        //access properties 
        input.current.setNativeProps({
            fontSize: 24,
            color: "green"
        })
    }

    return (
        <View>
            <TextInput
                ref={input}
                style={styles.textInput}
                placeholder="Enter Your Name :"
                keyboardType="name-phone-pad"
            />
            <TextInput style={styles.textInput}
                placeholder="Enter Your Email :"
                keyboardType="email-address"
            />

            <View style={styles.btnView}>
                <Button
                    title="Update input!"
                    onPress={refFun}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        fontSize: 20,
        borderColor: "black",
        borderWidth: 2,
        margin: 10,
        padding: 10
    },
    btnView: {
        margin: 10
    }
});

export default Refrn;