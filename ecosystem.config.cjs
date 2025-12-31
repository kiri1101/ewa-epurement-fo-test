module.exports = {
  apps: [
    {
      name: 'ewa-epurement-fo',
      port: '4001',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
}
