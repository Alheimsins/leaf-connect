(async () => {
  const leafConnect = require('../src')
  try {
    const client = await leafConnect({
      username: process.env.LEAF_CONNECT_USERNAME || 'your-nissan-you@email.com',
      password: process.env.LEAF_CONNECT_PASSWORD || 'password',
      debug: true
      /*
        regionCode: 'NNA',
        locale: 'en-US',
        pollingInterval: 30000 // in seconds
      */
    })
    // console.log(await client.sessionInfo())
    console.log(await client.cachedStatus())
    // console.log(await client.status())
    // console.log(await client.climateControlStatus())
    // console.log(await client.climateControlTurnOn())
    // console.log(await client.climateControlTurnOff())
    // console.log(await client.chargingStart())
    // console.log(await client.history())
    // console.log(await client.location())
  } catch (error) {
    console.log(error)
  }
})()
