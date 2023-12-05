import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";
import Assets from "../assets";

interface IconProps {
    name: string;
    style?: StyleProp<ViewStyle>;
}

export default function Icon(props: IconProps) {
    let { name, style } = props;
    let source = Assets.icons[name];

    return (
        <View style={[style, styles.icon]}>
            <SvgXml
                width="100%"
                height="100%"
                xml={source}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});