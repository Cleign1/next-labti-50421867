import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <button class="flex items-center space-x-3 rtl:space-x-reverse">
                    <Link prefetch={false} href='/' class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PWEB</Link>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg 
                    bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white 
                    dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <button>
                            <Link prefetch={false} href="/about" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 
                                md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white 
                                md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white 
                                md:dark:hover:bg-transparent">About</Link>
                        </button>
                        <button>
                            <Link prefetch={false} href="/aplikasi" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 
                                md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 
                                dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 
                                dark:hover:text-white md:dark:hover:bg-transparent">Aplikasi</Link>
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}