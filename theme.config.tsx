import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { Charis_SIL } from "next/font/google"
import { useRouter } from 'next/router'

const font = Charis_SIL({
  weight: "400",
  subsets: ["latin"],
})

const config: DocsThemeConfig = {
  logo: <span style={{ fontSize: 35 }} className={`${font.className}`}>WikiSubmission</span>,
  project: {
    link: 'https://github.com/wikisubmission/website',
  },
  docsRepositoryBase: 'https://github.com/wikisubmission/website/tree/main',
  footer: {
    text: (
      <span className={`${font.className}`}>
        {new Date().getFullYear()} ©{' '}
        <a href="https://wikisubmission.org" target="_blank">
          <strong>WikiSubmission</strong>
        </a>
        <hr />
        <div>
          <a href='/contact' style={{ fontSize: 13, color: "purple", paddingRight: 8 }}>
            Contact
          </a>
          <a href='/terms-of-use' style={{ fontSize: 13, color: "purple", paddingRight: 8 }}>
            Terms of Use
          </a>
          <a href='/privacy-policy' style={{ fontSize: 13, color: "purple" }}>
            Privacy Policy
          </a>
        </div>
      </span>
    )
  },
  primaryHue: 80,
  primarySaturation: 55,
  search: {
    placeholder: "Search WikiSubmission..."
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – WikiSubmission'
      }
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://wikisubmission.org' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'WikiSubmission'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'The Submission Knowledge Sharing Platform'}
        />
      </>
    )
  }
}

export default config