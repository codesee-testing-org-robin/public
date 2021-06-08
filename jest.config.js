module.exports = {
  collectCoverage: true,
  setupFiles: [
    './__tests__/setup.js'
  ],
  testEnvironment: 'jsdom',
  testMatch: [
    '**/__tests__/**/?(*.)test.js'
  ]
};
