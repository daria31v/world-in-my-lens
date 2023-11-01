import React from 'react'
import Logo from '../Logo/logo'
import Link from 'next/link'
import { Container } from '../Container/container'

// import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="md:flex block gap-2 items-center py-6 px-24 h-auto">
          <div className="grid gap-2 font-extra font-semibold sm:items-center mt-4">
            <Link href="/about" className="hover:text-secondary">
              About us
            </Link>
            <Link href="/partners" className="hover:text-secondary">
              Our parners
            </Link>
            <p className="text-secondary mt-4">The World is Wonderful: Catch the Moment!</p>
          </div>
          <div className="font-bold md:ml-auto">
            <div className=" w-48 h-20 flex justify-end">
              <Logo src="" alt="logo" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
