import "./globals.css"
import AnimatedFavicon from "@/components/Global/AnimatedFavicon"


export const metadata = {
  title: "Oriture — UI/UX Design & Development Agency",
  description: "Oriture is a full-service digital agency specialising in UI/UX design, branding, web development, and MVP builds. We turn ideas into impactful digital products.",
  metadataBase: new URL("https://www.oriture.co"),
  openGraph: {
    title: "Oriture — UI/UX Design & Development Agency",
    description: "Oriture is a full-service digital agency specialising in UI/UX design, branding, web development, and MVP builds. We turn ideas into impactful digital products.",
    url: "https://www.oriture.co",
    siteName: "Oriture",
    images: [
      {
        url: "/OritureCover.jpg",
        width: 3083,
        height: 1360,
        type: "image/jpeg",
        alt: "Oriture — UI/UX Design & Development Agency",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oriture — UI/UX Design & Development Agency",
    description: "Oriture is a full-service digital agency specialising in UI/UX design, branding, web development, and MVP builds. We turn ideas into impactful digital products.",
    images: ["/OritureCover.jpg"],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" href="/favicon1.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-black" suppressHydrationWarning>
        <AnimatedFavicon />
        {children}
    </body>
    </html>
  )
}
