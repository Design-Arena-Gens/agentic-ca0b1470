export const metadata = {
  title: 'Building Design - Ground Floor',
  description: 'Interactive building design with floor plan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
