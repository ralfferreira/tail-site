import './globals.css'

export const metadata = {
  title: 'TAIL',
  description: 'TAIL',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <div>TAIL</div>
        <div>{children}</div>
      </body>
    </html>
  )
}
