import { Metadata } from 'next'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import './globals.css'
import AuthProvider from '../providers/AuthProvider'
import { getServerSession } from 'next-auth'
import { Container } from './components/Container/container'

export const metadata: Metadata = {
  title: 'A World in My Lens',
  description:
    'Discover the vibrant stories and perspectives behind A World in My Lens. Explore our journey, mission, and passion for capturing the world through our unique lens.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession()

  return (
    <>
      <html lang="en" className="!scroll-smooth" >
        <body>
          <AuthProvider session={session}>
          <div id="modal-root"></div>
            <Container>
              <Header />
              <main id="app-container">{children}</main>
              <Footer />
            </Container>
          </AuthProvider>
        </body>
      </html>
    </>
  )
}
