const maxWaitTime = 30000

module.exports = async (interval, fn) => {
  const startTime = Date.now()

  return new Promise((resolve, reject) => {
    const retry = async fn => {
      if (startTime > startTime + maxWaitTime) {
        reject(Error('Timout threshold exceeded.'))
        return
      }

      let data = {}

      try {
        data = await fn()

        if (!data.responseFlag) {
          console.log(data)
          reject(Error('Response did not include response flag'))
        } else if (data.responseFlag === '0') {
          setTimeout(() => retry(fn), interval)
        } else {
          resolve(JSON.stringify(data, null, 2))
        }
      } catch (error) {
        reject(Error(`Failed to get status ${error.message}`))
      }
    }

    retry(fn)
  })
}
