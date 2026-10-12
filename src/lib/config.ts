function publicOrigin(value: string | undefined): string {
  if (value) {
    const url = new URL(value)
    if (url.protocol === 'https:' || url.protocol === 'http:') return url.origin
    throw new Error('VITE_SITE_URL must be an HTTP(S) URL')
  }
  return 'https://aeon-st.vercel.app'
}

export const siteConfig = {
  origin: publicOrigin(import.meta.env.VITE_SITE_URL),
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL?.trim() || '',
  contactEndpoint: import.meta.env.VITE_CONTACT_ENDPOINT?.trim() || '',
}
