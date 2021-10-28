module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],

  plugins: [
    [
      'transform-runtime',
      {
        regenerator: true,
      },
    ],
  ],
}
