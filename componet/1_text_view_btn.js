import react from 'react'
import { Button, Text, View } from 'react-native';


function View_first() {
    return (
        <View>
            <Text style={{ fontSize: 30, color: 'black' }}>
                hello PT
            </Text>

            <Button title='Press here!' color={"black"} />
        </View>
    );
}

export default View_first;