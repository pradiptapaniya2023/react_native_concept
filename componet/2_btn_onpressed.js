import React from "react";
import { Button, View } from "react-native";

const Button_pressed = () => {
    const fruit = () => {
        console.warn("Simple warn msg print")
    }

    const fruit2 = () => {
        console.warn("Arrow warn msg print")
    }

    return (
        <View style={{ padding: 10, margin: 10 }}>


            <View style={{ padding: 10 }}>
                <Button
                    title="Msg"
                    onPress={fruit}
                />
            </View>


            <View style={{ padding: 10 }}>
                <Button
                    title="Arrow msg"
                    onPress={() => fruit2()}
                />
            </View>

        </View>
    );
}

export default Button_pressed;