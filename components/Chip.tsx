import { StyleProp, View, Text, ViewStyle, StyleSheet, TouchableHighlight } from "react-native";

export enum ChipState {
    Default,
    Selected,
    Disabled,
}

interface ChipProps {
    name: string;
    state?: ChipState;
    style?: StyleProp<ViewStyle>;
    onPress?: () => void;
}

export default function Chip(props: ChipProps) {
    const { name, state = ChipState.Default, onPress, style } = props;

    return (
        <View style={style}>
            <TouchableHighlight onPress={onPress}>
                <Text
                    style={[
                        state === ChipState.Default && styles.defaultText,
                        state === ChipState.Disabled && styles.disabledText,
                        state === ChipState.Selected && styles.selectedText,
                    ]}>
                    {name}
                </Text>
            </TouchableHighlight>
        </View>

    );
}

const styles = StyleSheet.create({
    defaultText: {
        color: '#FFF',
        fontSize: 14,
        borderRadius: 16,
        paddingVertical: 8,
        borderColor: '#FFF',
        borderWidth: 1,
        textAlign: 'center',
    },
    disabledText: {
        color: '#BBB',
        fontSize: 14,
        textAlign: 'center',
    },
    selectedText: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: '700',
        borderRadius: 16,
        paddingVertical: 8,
        backgroundColor: '#0677E8',
        textAlign: 'center',
    },
});