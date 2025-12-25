module.exports = {
  apps: [
    {
      name: 'ewa-nuxt-fo',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
}
