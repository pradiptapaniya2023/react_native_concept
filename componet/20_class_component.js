import React from "react";
import { Button, Text, TextInput, View } from 'react-native';

class C_Component extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'pt0',
            age: 20
        };
    }

    updateName(text1) {
        this.setState({ name: text1 });
    }

    updateAge(text2) {
        this.setState({ age: text2 });
    }

    render() {
        return (
            <View>
                <Text style={{ fontSize: 30, color: 'blue' }}>
                    Name: {this.state.name} | Age: {this.state.age}
                </Text>

                <TextInput
                    placeholder="Enter any name!"
                    onChangeText={(text1) => this.updateName(text1)}
                    style={{ borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
                />

                <TextInput
                    placeholder="Enter any age!"
                    keyboardType="numeric"
                    onChangeText={(text2) => this.updateAge(text2)}
                    style={{ borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
                />

                <Button title="Call Function?" onPress={() => console.warn("Button pressed!")} />

                <C_Component2 name={this.state.name} age={this.state.age} />
            </View>
        );
    }
}

class C_Component2 extends React.Component {
    render() {
        return (
            <View>
                <Text style={{ fontSize: 30, color: 'blue' }}>
                    Second Class Component
                </Text>
                <Text style={{ fontSize: 30, color: 'blue' }}>
                    {this.props.name} {this.props.age}
                </Text>
            </View>
        );
    }
}

export default C_Component;
