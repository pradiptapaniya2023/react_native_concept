import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const Props_rn = () => {
    let name = "PT flutter + react native"
    const [uname, setName] = useState("Username");

    const changeName = () => {
        setName("Change username");
    }

    return (
        <View>
            <Text style={{ fontSize: 40 }}>
                Pradip
            </Text>

            <Button title='call changeName funcation' onPress={changeName} />
            
            <Props2 name={name} uname={uname} />
        </View>
    );
}


const Props2 = (props) => {

    return (
        <View>
            <Text style={{ fontSize: 25, backgroundColor: 'grey', color: 'black' }}>
                {props.name}
            </Text>

            <Text style={{ fontSize: 25, backgroundColor: 'grey', color: 'black' }}>
                {props.uname}
            </Text>
        </View>
    );
}

export default Props_rn;