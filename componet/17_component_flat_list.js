import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const Componet_list = () => {
    const data_list = [
        {
            id: 1,
            name: 'pt1',
            mail: 'pt@gmail.com'
        },

        {
            id: 2,
            name: 'pt2',
            mail: 'pt2@gmail.com'
        },

        {
            id: 3,
            name: 'pt3',
            mail: 'pt3@gmail.com'
        },

        {
            id: 4,
            name: 'pt4',
            mail: 'pt4@gmail.com'
        },

        {
            id: 5,
            name: 'pt5',
            mail: 'pt5@gmail.com'
        }
    ]

    return (
        <View>
            <FlatList
                data={data_list}
                renderItem={({ item }) => <Custom_view map_name={item} />
                }
            />

        </View>

    );
}

const Custom_view = (props) => {
    const item = props.map_name;

    return (
        <View style={styles.box_st}>

            <Text style={styles.text_st}>
                {item.id}
            </Text >
            <Text style={styles.text_st}>
                {item.name}
            </Text>
            <Text style={styles.text_st}>
                {item.mail}
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    box_st: {
        backgroundColor: 'grey',
        borderColor: 'black',
        borderWidth: 2,
        height: 90,
        margin: 20
    },
    text_st: {
        fontSize: 20,
        color: 'black'
    }
})


export default Componet_list;