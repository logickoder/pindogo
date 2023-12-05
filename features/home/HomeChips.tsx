import { StyleProp, View, ViewStyle, StyleSheet } from "react-native";
import Chip, { ChipState } from "../../components/Chip";
import React from "react";

interface HomeChipsProps {
    style?: StyleProp<ViewStyle>;
}

export default class HomeChips extends React.Component<HomeChipsProps> {
    state = {
        selected: "Groups",
    }

    updateSelected = (name: string) => {
        this.setState({ selected: name });
    }

    getState(name: string): ChipState {
        if (name === this.state.selected) {
            return ChipState.Selected;
        } else if (name === "Activity") {
            return ChipState.Default;
        } else {
            return ChipState.Disabled;
        }
    }

    render(): React.ReactNode {
        return (
            <View style={[this.props.style, styles.container]}>
                {items.map((item) => (
                    <Chip
                        key={item}
                        name={item}
                        state={this.getState(item)}
                        onPress={() => this.updateSelected(item)}
                        style={styles.item}
                    />
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    item: {
        flex: 1,
    }
});

const items = [
    "Activity",
    "Discover",
    "Reels",
    "Groups"
]