import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

import { getClientEnv } from '@/config'

const clientConfig = getClientEnv()

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        />

        <link href="https://fonts.cdnfonts.com/css/inter" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet" />
        <link
          href="https://fonts.cdnfonts.com/css/merriweather-sans"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/kodchasan"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/be-vietnam"
          rel="stylesheet"
        />
        <Script strategy="beforeInteractive" id="posthog">
          {` 
            !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
            posthog.init('${clientConfig.NEXT_PUBLIC_POSTHOG_KEY}', {api_host: 'https://eu.i.posthog.com', person_profiles: 'identified_only'})
          `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
