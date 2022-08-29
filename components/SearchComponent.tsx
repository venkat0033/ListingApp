import * as React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SearchComponent = ({ onSubmitEditing }: { onSubmitEditing: any }) => {
    const [text, onChangeText] = React.useState("");

    const rerenderScreen = () => {
        onSubmitEditing(text);
    };

    return (
        <View style={{ marginHorizontal: 10 }}>
            <TextInput onChangeText={onChangeText} value={text} style={styles.input} />
            <TouchableOpacity onPress={() => rerenderScreen()} style={styles.button}>
                <Text style={styles.buttontext}>Re-render</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    input: {
        height: 40,
        margin: 12,
        marginLeft: 0,
        borderWidth: 1
    },
    button: {
        borderRadius: 5,
        backgroundColor: '#d2d2d2',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 120
    },
    buttontext: {
        fontWeight: "bold"
    }
});

export default SearchComponent;