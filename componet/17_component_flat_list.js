import React from "react";
import { FlatList, Text, View } from "react-native";

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
                renderItem={({item}) => 
                <View>
                    <Text>
                        {item.id}
                    </Text>
                    <Text>
                        {item.name}
                    </Text>
                    <Text>
                        {item.mail}
                    </Text>
                </View>}
            />

        </View>

    );
}


export default Componet_list;