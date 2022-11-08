import '../styles/globals.css';
import Header from "./header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>Elizabeth's Website</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
