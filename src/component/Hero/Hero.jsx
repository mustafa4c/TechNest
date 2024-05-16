import Link from "next/link";


export default function () {
  return (
    <>

<section class="bg-[#7AB2B2] pt-20">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-20 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Experience <span className="text-[#31363F]">Tomorrow</span>  Today</h1>
                <p class="max-w-2xl mb-6 font-medium text-[#31363F] lg:mb-8 md:text-lg lg:text-xl dark:text-[#31363F]">At TechNest, we're passionate about providing you with the latest and most innovative smart devices to enrich your life.</p>
                <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Get started
                    <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                <Link href="/blog" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 rounded-lg bg-[#31363F] focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Shoping Now
                </Link> 
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"/>
            </div>                
        </div>
    </section>



<div class="bg-[#31363F]">
  <div class="pt-10 pb-10">

    <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-5xl lg:grid-cols-3 lg:gap-x-8 lg:px-12 ">
      <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
        <img src="https://i.pinimg.com/736x/00/b9/e9/00b9e932a56e92e4388b9783d6a1d335.jpg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center"/>
      </div>
      <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <img src="https://i.pinimg.com/564x/74/f7/3c/74f73cf57a811ebf80eaa4675b9fca15.jpg" alt="Model wearing plain black basic tee." class="h-full w-full object-cover object-center"/>
        </div>
        <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <img src="https://i.pinimg.com/564x/db/ae/bc/dbaebc5328016d9332b696dbf76be702.jpg" alt="Model wearing plain gray basic tee." class="h-full w-full object-cover object-center"/>
        </div>
      </div>
      <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
        <img src="https://i.pinimg.com/736x/7a/6a/9d/7a6a9dbec3b07fe68688a74a8cd3e3ba.jpg" alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center"/>
      </div>
    </div>

   
  </div>
</div>


<div class="container pt-20 bg-[#76ABAE]">
  <section class="pb-20">
    <h2 class="mb-12 text-[#31363F] text-center text-5xl font-bold ">
      Why is it so great?
    </h2>

    <div class="flex flex-wrap items-center">
      <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-6 lg:mb-0 lg:w-5/12">
        <div class="relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <img src="https://mdbcdn.b-cdn.net/img/new/textures/full/98.jpg" class="w-full" />
          <Link href="/blog">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,0%,0.4)] bg-fixed">
              <div class="flex h-full items-center justify-center">
                <div class="px-6 py-12 text-center text-white md:px-12">
                  <h3 class="mb-6 text-2xl font-bold uppercase">
                    The future is
                    <u class="text-[hsl(210,12%,80%)]">now</u>
                  </h3>
                  <p class="text-[hsl(210,12%,80%)]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum quia laboriosam error consequuntur fugit,
                    doloribus rerum, iure nesciunt amet quidem veniam
                    cupiditate hic fugiat dolore aperiam quisquam libero
                    earum quibusdam?
                  </p>
                </div>
              </div>
            </div>
            <div class="relative overflow-hidden bg-cover bg-no-repeat">
              <div
                class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div class="w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12">
        <div class="mb-12 flex">
          <div class="shrink-0">
            <div class="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
              </svg>
            </div>
          </div>
          <div class="ml-4 grow">
            <p class="mb-1 font-bold">Support 24/7</p>
            <p class="text-neutral-500 dark:text-neutral-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Nihil quisquam quibusdam modi sapiente magni molestias
              pariatur facilis reprehenderit facere aliquam ex.
            </p>
          </div>
        </div>

        <div class="mb-12 flex">
          <div class="shrink-0">
            <div class="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
          </div>
          <div class="ml-4 grow">
            <p class="mb-1 font-bold">Safe and solid</p>
            <p class="text-neutral-500 dark:text-neutral-300">
              Eum nostrum fugit numquam, voluptates veniam neque quibusdam
              ullam aspernatur odio soluta, quisquam dolore animi mollitia a
              omnis praesentium, expedita nobis!
            </p>
          </div>
        </div>

        <div class="mb-12 flex">
          <div class="shrink-0">
            <div class="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
            </div>
          </div>
          <div class="ml-4 grow">
            <p class="mb-1 font-bold">Extremely fast</p>
            <p class="text-neutral-500 dark:text-neutral-300">
              Enim cupiditate, minus nulla dolor cumque iure eveniet facere
              ullam beatae hic voluptatibus dolores exercitationem? Facilis
              debitis aspernatur amet nisi iure eveniet facere?
            </p>
          </div>
        </div>

        <div class="flex">
          <div class="shrink-0">
            <div class="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
            </div>
          </div>
          <div class="ml-4 grow">
            <p class="mb-1 font-bold">Live analytics</p>
            <p class="text-neutral-500 dark:text-neutral-300">
              Illum doloremque ea, blanditiis sed dolor laborum praesentium
              maxime sint, consectetur atque ipsum ab adipisci ullam
              aspernatur odio soluta, quisquam dolore
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>


<div class="container pt-20 pb-20 bg-[#31363F]">
  <section class=" text-center">

    <div class="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
      <div class="mb-12 md:mb-0">
        <div class="mb-6 flex justify-center">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
            class="w-32 rounded-full shadow-lg dark:shadow-black/20" />
        </div>
        <h5 class="mb-2 text-lg font-bold text-[#76ABAE]">Maria Smantha</h5>
        <h6 class="mb-4 font-medium text-primary dark:text-primary-400 text-gray-400">
          Web Developer
        </h6>
        <p class="mb-4 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
          id officiis hic tenetur quae quaerat ad velit ab hic.
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="inline-block w-6 text-gray-100">
            <path fill="currentColor"
              d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
          </svg>
        </p>

        <ul class="mb-0 flex justify-center text-[#FFFF80]">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
        </ul>
      </div>
      <div class="mb-12 md:mb-0">
        <div class="mb-6 flex justify-center">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
            class="w-32 rounded-full shadow-lg dark:shadow-black/20" />
        </div>
        <h5 class="mb-2 text-lg font-bold text-[#76ABAE]">Lisa Cudrow</h5>
        <h6 class="mb-4 font-medium text-primary dark:text-primary-400 text-gray-400">
          Graphic Designer
        </h6>
        <p class="mb-4 text-gray-500">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam
          corporis suscipit laboriosam, nisi ut aliquid commodi.
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="inline-block w-6 text-gray-100">
            <path fill="currentColor"
              d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
          </svg>
        </p>

        <ul class="mb-0 flex justify-center text-[#FFFF80]">
          <li >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning ">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
        </ul>
      </div>
      <div class="mb-0">
        <div class="mb-6 flex justify-center">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
            class="w-32 rounded-full shadow-lg dark:shadow-black/20" />
        </div>
        <h5 class="mb-2 text-lg font-bold text-[#76ABAE]">John Smith</h5>
        <h6 class="mb-4 font-medium text-primary dark:text-primary-400 text-gray-400">
          Marketing Specialist
        </h6>
        <p class="mb-4 text-gray-500">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti.
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="inline-block w-6 text-gray-100">
            <path fill="currentColor"
              d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
          </svg>
        </p>

        <ul class="mb-0 flex justify-center text-[#FFFF80]">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z" />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  </section>
</div>


    </>
  )
}
