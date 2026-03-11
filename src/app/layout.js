import "./globals.css"
import AnimatedFavicon from "@/components/Global/AnimatedFavicon"


export const metadata = {
  title: "Oriture: Powering Business Through Design & Development",
  description: "Oriture is a global design and development studio with 30+ projects, 20+ clients, a team of 7, and work across 11 countries, building scalable digital products through design and technology.",
  metadataBase: new URL("https://www.oriture.co"),
  openGraph: {
    title: "Oriture: Powering Business Through Design & Development",
    description: "Oriture is a global design and development studio with 30+ projects, 20+ clients, a team of 7, and work across 11 countries, building scalable digital products through design and technology.",
    url: "https://www.oriture.co",
    siteName: "Oriture",
    images: [
      {
        url: "/oritrueCover.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Oriture: Powering Business Through Design & Development",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oriture: Powering Business Through Design & Development",
    description: "Oriture is a global design and development studio with 30+ projects, 20+ clients, a team of 7, and work across 11 countries, building scalable digital products through design and technology.",
    images: ["/oritrueCover.png"],
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
