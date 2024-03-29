import Button from '@/app/components/Button/Buttons'
import { Container } from '@/app/components/Container/container'
import ProfileCard from '@/app/components/Profile/ProfileCard'
import UserGallery from '@/app/components/Profile/UserGallery'
import { authConfig } from '@/utils/authConfig'
import { getServerSession } from 'next-auth/next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'
import GallerySVG from '../../../../public/icon/GallerySVG'

export default async function ProfileGallery() {
  const session = await getServerSession(authConfig)

  if (!session) {
    redirect('/login')
  }
  return (
    <section className="py-16 xl:px-[100px] md:px-12 px-6 bg-section-texture bg-cover bg-center bg-no-repeat">
      <h1 className="text-md font-semibold text-start uppercase mb-4 text-secondary">My gallery</h1>
      <div className="w-14 h-1 bg-secondary rounded-md mb-4"></div>

      <div className="md:flex md:justify-between md:items-center mb-4">
        <p className="text-secondary text-medium font-normal">YOU CAN MENAGE YOUR GALLERY HERE</p>
        <div className="flex justify-center items-center gap-5 mt-4 md:mt-0">
          {/* Modal add photo */}
          <Button className="text-secondary text-small font-semibold px-3 rounded-md h-[38px] border border-green_light flex justify-center items-center bg-white shadow-md cursor-pointer gap-1 hover:bg-secondary hover:text-white">
            <GallerySVG className="hover:stroke-white" />
            New Photo
          </Button>
          <Link
            href="/gallery"
            className="text-secondary border border-green_light text-small font-semibold px-3 rounded-md h-[38px] flex justify-center items-center bg-white shadow-md cursor-pointer hover:bg-secondary hover:text-white"
          >
            Back to Gallery
          </Link>
        </div>
      </div>

      <div className=" md:flex">
        <div className="md:px-10">
          <ProfileCard user={session?.user} />
        </div>
        <div>
          <UserGallery userData={session?.user} />
        </div>
      </div>
    </section>
  )
}
