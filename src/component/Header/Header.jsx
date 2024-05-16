import React from 'react'

export default function Header({title}) {
  return (
    <>
    <section class="bg-[#31363F] py-10 ">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-20 lg:px-12">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{title} Page</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis quia officia dolorum libero. Temporibus vel architecto quod, a facere inventore!</p> 
    </div>
</section></>
  )
}
