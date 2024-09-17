import React from "react";
import { FlatList, Text, View } from "react-native";

const Flat_list_rn = () => {
    const list_data = [
        {
            id: 1,
            name: 'pt1'
        },
        {
            id: 2,
            name: 'pt2'
        },
        {
            id: 3,
            name: 'pt3'
        },
        {
            id: 4,
            name: 'pt4'
        },
        {
            id: 5,
            name: 'pt5'
        },

    ];


    return (
        <View>

            <Text style={{ fontSize: 30, color: 'black' }}>
                Bio Data List
            </Text>

            <FlatList
                data={list_data}
                renderItem={({ item }) => <Text style={{ fontSize: 30 }}>{item.name}</Text>}
            />
        </View>

    );
}

export default Flat_list_rn;