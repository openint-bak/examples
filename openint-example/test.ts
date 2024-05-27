import { initOpenIntSDK } from '@opensdks/sdk-openint'
const serverOpenInt = initOpenIntSDK({
  baseUrl: 'http://localhost:4000/api/v0',
  headers: { 'x-apikey': process.env.OPENINT_API_KEY },
})
const endUserToken = serverOpenInt
  .POST('/connect/token', { body: { endUserId: 'test' } })
  .then((r) => console.log(r.data.token))
