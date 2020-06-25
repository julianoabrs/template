// jest.config.js
module.exports = {
    preset: "@testing-library/react-native",
    setupFilesAfterEnv: [
        "@testing-library/jest-native/extend-expect",
    ],
    setupFiles: [
        "./node_modules/react-native-gesture-handler/jestSetup.js",
    ],
    testMatch: [
        "<rootDir>/src/**/*.test.js",
    ],
    transformIgnorePatterns: [
        "node_modules/(?!(jest-)?react-native|react-navigation|@react-navigation|@bankify/react-native-animate-number|rn-sliding-up-panel|rn-sliding-up-panel)",
    ],
}
