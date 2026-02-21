"use client"
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import Link from "next/link";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <ul className="relative flex h-20 items-center justify-between">
          <li className="flex items-center gap-4">
            <button onClick={() => setOpenMenu(!openMenu)}>
              <MenuIcon />
            </button>

            <Link href='/' className="flex items-center gap-2 font-semibold absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
              <img src="https://portal.heinsohn.com.co/assets/icon/icon-512x512.png" alt="img logo"
                className="inline-block h-6 w-6 rounded-full sm:h-8 sm:w-8"/>
              HEINSOHN
            </Link>
          </li>

          <li className="hidden md:flex gap-3 sm:gap-4">
            <button className="rounded-full bg-black px-4 py-2 sm:px-5 sm:text-sm">
              <Link href='/' className="text-white">Contacto</Link>
            </button>

            <img src="https://media.istockphoto.com/id/472331329/es/vector/bandera-de-colombia.jpg?s=1024x1024&w=is&k=20&c=ysoJC62S104d7hPJygDxujRP9_WPpqN5yrMRw1Bb8WE="
              alt="img colombia"
              className="inline-block h-6 w-6 rounded-full sm:h-8 sm:w-8 "/>

            <select>
              <option>ES</option>
              <option>EN</option>
              <option>FRA</option>
            </select>
            <i><ModeNightIcon /> </i>
          </li>
        </ul>

          <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
                      ${openMenu ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
            <ul className='flex flex-col gap-4 text-sm'>
              <li>
                <button className="rounded-full bg-black px-4 py-2 sm:px-5 sm:text-sm">
                  <Link href='/' className="text-white">Contacto</Link>
                </button>
              </li>

              <li>
                <select>
                  <option>ES</option>
                  <option>EN</option>
                  <option>FRA</option>
                </select>
              </li>

            </ul>
          </div>
      </nav>
    </header>
  )
}
