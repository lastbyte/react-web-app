module.exports = {
    testEnvironment: 'jsdom',
    transformIgnorePatterns: ['/node_modules\/(.*)'],
    moduleNameMapper: {
        '\.css': '<rootDir>/tests/__mocks__/mockStyles.ts',
        '\.png': '<rootDir>/tests/__mocks__/mockAssets.ts',
        '\.svg': '<rootDir>/tests/__mocks__/mockAssets.ts',
        '\.jpg': '<rootDir>/tests/__mocks__/mockAssets.ts',
        '\.jpeg': '<rootDir>/tests/__mocks__/mockAssets.ts',
    },
    transform: {
        "^.+\\.(ts|js)x?$": "ts-jest",
    },
}