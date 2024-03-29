import { authConfig } from '../../utils/authConfig'
import { getServerSession } from 'next-auth/next'
import { Container } from '../components/Container/container'
import { redirect } from 'next/navigation'
import ProfileComponent from '../components/Profile/ProfileComponent'
import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast'

export default async function ProfilePage() {
  const session = await getServerSession(authConfig)
  // // console.log('Profile session:',session);
  if (!session) {
    redirect('/login')
    return null
  }

  return (
    <section className="py-16 font-bold xl:px-[100px] md:px-12 px-6 bg-section-texture bg-cover bg-center bg-no-repeat">
      <Toaster />
      <h1 className="text-md font-semibold text-start uppercase mb-4 text-secondary">My profile</h1>
      <div className="w-14 h-1 bg-secondary rounded-md mb-4"></div>

      <div className="md:flex md:justify-between mb-4">
        <p className="text-secondary md:text-medium text-base font-normal md:mb-0 mb-4">
          YOU CAN EDIT YOUR PROFILE HERE
        </p>
        <Link
          href="/blog"
          className="text-secondary border border-green_light md:text-small text-xs text-center  font-semibold px-3 w-[100px] rounded-md h-[38px] flex justify-center items-center bg-white shadow-md cursor-pointer hover:bg-secondary hover:text-white"
        >
          Back to blog
        </Link>
      </div>

      <ProfileComponent user={session?.user} />
    </section>
  )
}
