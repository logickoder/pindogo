const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')

const config = {
    resolver: {
        // unstable_enableSymlinks: true,
    },
}

module.exports = mergeConfig(getDefaultConfig(__dirname), config)