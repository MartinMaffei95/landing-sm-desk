'use client'
import Script from 'next/script'

const GoogleTagManagerBody = ({
  GTM_CONTAINER_ID,
}: {
  GTM_CONTAINER_ID: string
}) => {
  return (
    <>
      <Script id="google-gtm-body" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GTM_CONTAINER_ID}')
        `}
      </Script>
    </>
  )
}

export default GoogleTagManagerBody
