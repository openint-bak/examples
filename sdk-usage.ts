import initOpenIntSDK from '@opensdks/sdk-openint'

const openint = initOpenIntSDK({ headers: {} })

openint
  .GET('/connector/{name}', { params: { path: { name: 'greenhouse' } } })
  .then((r) => {
    console.log(r.data)
  })
