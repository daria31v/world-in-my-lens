'use client'
import Image from 'next/image'
import defaultImg from '../../../../public/images/post.webp'
import Button from '../Button/Buttons'
import SearchSVG from '../../../../public/icon/SearchSVG'
import mape from '../../../../public/images/mape.png'
// import { GoogleMap, Marker } from '@react-google-maps/api'
import Link from 'next/link'

const UploadPostForm = () => {
  return (
    <>
      <div className="xl:w-[1090px] mx-auto  bg-white rounded-md">
        <form className="px-10 py-7">
          <div className="xl:flex xl:gap-12">
            <div className="xl:max-w-[330px] text-center ">
              <span className="text-duna text-xs">Uploaded Photo</span>
              <div className="md:flex md:items-center md:justify-center">
                <Image
                  src={defaultImg}
                  alt="default image"
                  width={330}
                  height={330}
                  className="shadow-md"
                />
              </div>
              <div className="flex justify-end gap-3 mt-3 md:mb-0 mb-4">
                <Button className="w-[34px] h-[34px] shadow-md bg-peach text-md text-duna px-2 py-1 flex justify-center items-center rounded-md">
                  <span>+</span>
                </Button>
                <Button className="w-[34px] h-[34px] shadow-md bg-peach text-md text-duna px-2 py-1 flex justify-center items-center rounded-md">
                  <span>-</span>
                </Button>
              </div>
            </div>

            <div className="block">
              <label>
                <input
                  className=" font-bold text-sm placeholder:text-pink mb-2 w-full"
                  placeholder="Add your title"
                />
              </label>
              <div className="xl:w-[626px] h-[1px] bg-duna rounded-md mb-4 "></div>
              <textarea
                placeholder="Write here"
                className="xl:w-[626px] w-full xl:h-[216px] h-52 text-base placeholder:text-pink bg-peach_light p-3 rounded-md shadow-md"
              ></textarea>

              <div className="md:flex md:gap-2 md:items-center grid gap-4 mt-6">
                <span className="text-base text-duna font-bold mr-7">Place for the rest</span>
                <label className="rounded-md h-8 inline-block px-3 py-1 shadow-md text-center cursor-pointer bg-peach_light  text-secondary hover:bg-secondary hover:text-peach_light hover:shadow-md focus:shadow-md">
                  Waterfall
                  <input type="checkbox" className="absolute opacity-0 pointer-events-none" />
                </label>
                <label className="rounded-md h-8 inline-block px-3 py-1 shadow-md text-center cursor-pointer bg-peach_light  text-secondary hover:bg-secondary hover:text-peach_light hover:shadow-md focus:shadow-md">
                  Mountain
                  <input type="checkbox" className="absolute opacity-0 pointer-events-none" />
                </label>
                <label className="rounded-md h-8 inline-block px-3 py-1 shadow-md text-center cursor-pointer bg-peach_light  text-secondary hover:bg-secondary hover:text-peach_light hover:shadow-md focus:shadow-md">
                  River
                  <input type="checkbox" className="absolute opacity-0 pointer-events-none" />
                </label>
                <label className="rounded-md h-8 inline-block px-3 py-1 shadow-md text-center cursor-pointer bg-peach_light text-secondary hover:bg-secondary hover:text-peach_light hover:shadow-md focus:shadow-md">
                  Other
                  <input type="checkbox" className="absolute opacity-0 pointer-events-none" />
                </label>
              </div>

              <div className="md:flex md:items-start md:justify-between grid gap-4 mt-6">
                <span className="text-base text-duna font-bold">Mark your place</span>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g Yosemite National Park"
                    className="px-3 py-1 placeholder:text-nude text-small font-normal md:w-[250px] h-8 rounded-3xl bg-peach_light shadow-md"
                  />
                  <Button className="absolute inset-y-0 right-0 flex items-center px-3 text-peach_dark md:mb-0">
                    <SearchSVG />
                  </Button>
                </div>
                {/* //Google Mapes */}
                <div className="rounded-md">
                  <Link
                    href="https://maps.google.com"
                  >
                    <Image
                      src={mape}
                      alt="mape"
                      width={222}
                      height={121}
                      className="object-cover"
                    />
                  </Link>
                  {/* <GoogleMap
                    id="map"
                    mapContainerStyle={{ width: '100%', height: '200px' }}
                    center={{ lat: 50.07934699269188, lng: 14.412624951787148 }}
                    zoom={12}
                    options={{ 
                      googleMapsApiKey: process.env.GOOGLE_MAP_KEY as string,
                    }}
                  >
                    <Marker position={{ lat: 50.07934699269188, lng: 14.412624951787148 }} />
                  </GoogleMap> */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-4 ">
            <Button className="flex rounded-3xl justify-center items-center shadow-md text-white text-base w-[150px] h-[50px] bg-gradient-to-r to-[#F38605] from-[#EFA00766]">
              Upload Now
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default UploadPostForm
