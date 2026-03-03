import "./globals.css"
import AnimatedFavicon from "@/components/Global/AnimatedFavicon"


export const metadata = {
  title: "Oriture - Digital Agency",
  description: "Professional digital agency services for modern businesses",
  generator: "v0.app",
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
