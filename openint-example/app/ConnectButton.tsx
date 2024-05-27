'use client'
import { initOpenIntSDK } from '@opensdks/sdk-openint'
import { OpenIntFrontend } from '@openint/connect'

export const ConnectButton = (props: { endUserToken?: string }) => {
  const clientOpenInt = initOpenIntSDK({
    headers: { authorization: `Bearer ${props.endUserToken}` },
  })
  return (
    <button
      onClick={async () => {
        const url = await clientOpenInt
          .POST('/connect/magic-link', { body: { connectorName: 'hubspot' } })
          .then((r) => r.data.url)
        OpenIntFrontend.openMagicLink({ url })
          .then((r) => {
            // Handle the response
            console.log(r)
          })
          .catch((e) => {
            // Handle the error
            console.error(e)
          })
      }}
    >
      Connect Hubspot
    </button>
  )
}
