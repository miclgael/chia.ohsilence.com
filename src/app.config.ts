export default defineAppConfig({
  siteName: "Oh Silence Record Co.",
  siteTagline: "The tiny, independent record label",
  siteAuthor: "Michael Gale",
  socialMedia: [
    {
      text: "Instagram",
      icon: "instagram",
      href: "https://www.instagram.com/ohsilencerecords"
    },
    {
      text: "Spotify Playlist",
      icon: "spotify",
      href: "https://open.spotify.com/playlist/6lm8B1mf1v60pwyf7rkplp?si=6488de3446814a5c"
    }
  ]
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    title?: string
  }
}
