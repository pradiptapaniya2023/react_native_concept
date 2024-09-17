import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const State_rn = () => {
    const [name, setName] = useState("PT");

    const changeVal = () => {
        setName("PRADIP");
    }

    return (
        <View>

            <Text style={{ fontSize: 40 }}>
                {name}
            </Text>

            <Button
                title="Change value"
                onPress={changeVal}
            />

        </View>
    );

}

export default State_rn;