import { Container } from '@/app/components/Container/container'
import Link from 'next/link'
import React from 'react'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'
import { authConfig } from '../../../utils/authConfig'
import ProfileCard from '@/app/components/Profile/ProfileCard'
import PostsEdit from '@/app/components/Profile/PostsEdit'
import NewPost from '../../../../public/icon/NewPostSVG'

export default async function ProfilePostsPage() {
  const session = await getServerSession(authConfig)

  if (!session) {
    redirect('/login')
  }

  return (
      <section className="py-16 xl:px-[100px] md:px-12 px-6 bg-section-texture bg-cover bg-center bg-no-repeat">
        <h1 className="text-md font-semibold text-start uppercase mb-4 text-secondary">My posts</h1>
        <div className="w-14 h-1 bg-secondary rounded-md mb-4"></div>

        <div className="md:flex md:justify-between mb-4">
          <p className="text-secondary md:text-medium text-base font-normal">
            YOU CAN MENAGE YOUR POSTS HERE
          </p>
          <div className="flex justify-center items-center gap-5 my-4 md:mt-0">
            <Link
              href="/profile/posts/new"
              className="text-secondary text-small font-semibold px-3 rounded-md h-[38px] border border-green_light flex justify-center items-center bg-white shadow-md cursor-pointer gap-1 hover:bg-secondary hover:text-white"
            >
              <NewPost className="" />
              New post
            </Link>
            <Link
              href="/blog"
              className="text-secondary border border-green_light text-small font-semibold px-3 w-[100px] rounded-md h-[38px] flex justify-center items-center bg-white shadow-md cursor-pointer hover:bg-secondary hover:text-white"
            >
              Back to blog
            </Link>
          </div>
        </div>

        <div className=" md:flex">
          <div className="md:px-10">
            <ProfileCard user={session?.user} />
          </div>
          <div className="xl:ml-36 ">
            <PostsEdit userData={session?.user} />
          </div>
        </div>
      </section>
  )
}
