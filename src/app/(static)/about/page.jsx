import Link from "next/link"
import Header from "../../../component/Header/Header"

export default function About() {
  return (
    <>
    <Header title = "About" />
        
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      
      <div className="absolute inset-0 -z-10 overflow-hidden">
    <svg
      className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="e813992c-7d03-4cc4-a2bd-151760b470a0"
          width={200}
          height={200}
          x="50%"
          y={-1}
          patternUnits="userSpaceOnUse"
        >
          <path d="M100 200V.5M.5 .5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
        <path
          d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
          strokeWidth={0}
        />
      </svg>
      <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
    </svg>
  </div>
  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div className="lg:pr-4">
        <div className="lg:max-w-lg">
            
          <p className="text-base font-semibold leading-7 text-indigo-600">Lorem, ipsum.</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Lorem, ipsum dolor.</h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium suscipit a repudiandae inventore architecto provident quis sunt voluptatum optio minus.
          </p>
        </div>
      </div>
    </div>
    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
      <img
        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
        src="https://img.freepik.com/free-photo/young-woman-typing-laptop_23-2147859264.jpg?t=st=1713589195~exp=1713592795~hmac=d4ca7fbf2db8a81ba2adb54ccd5bfd970a9ed5371bca7414b87f705bac28740f&w=740"
        alt=""
      />
    </div>
    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div className="lg:pr-4">
        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quod reprehenderit optio laudantium quisquam eius fugit maiores sequi doloremque consequatur!
          </p>
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">Lorem, ipsum dolor..</strong> Lorem ipsum, dolor sit amet
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rem fuga, quae quaerat dolore quas?
              </span>
            </li>
            <li className="flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">Lorem, ipsum..</strong> Anim aute id magna aliqua
                ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
              </span>
            </li>
            <li className="flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">Lorem, ipsum..</strong> Ac tincidunt sapien
                vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
              </span>
            </li>
          </ul>
          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quod adipisci? Debitis doloremque recusandae perferendis unde necessitatibus dolorem aspernatur repellat sint, a, amet aliquid molestias quisquam neque cupiditate quo sunt!
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Lorem ipsum dolor sit.</h2>
          <p className="mt-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat suscipit pariatur itaque dolorem ullam fugiat ipsam, veniam quaerat provident totam doloribus eaque, est inventore perferendis quidem eveniet culpa repellat atque voluptatum aperiam ea, quas ducimus consequuntur. Quis quo deserunt quas?
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>

  <div class="relative overflow-hidden bg-[#31363F] pb-20 pt-20">
  <div class="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
    <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
      <div class="sm:max-w-lg">
        <h1 class="text-4xl font-bold tracking-tight text-[#76ABAE] sm:text-6xl">Lorem ipsum dolor sit.</h1>
        <p class="mt-4 text-xl text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt sit ipsum debitis impedit quod nihil?</p>
      </div>
      <div>
        <div class="mt-10">
 
          <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
            <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
              <div class="flex items-center space-x-6 lg:space-x-8">
                <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                    <img src="https://img.freepik.com/free-photo/side-view-man-talking-phone_23-2149706567.jpg?t=st=1713591701~exp=1713595301~hmac=10f28ffa9cdf84c3ad4da729d416db139a2ce49e3a9d49c4cfa2833a37b0d640&w=1060" alt="" class="h-full w-full object-cover object-center"/>
                  </div>
                  <div class="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://img.freepik.com/free-photo/medium-shot-man-working-from-home_23-2150232424.jpg?t=st=1713591778~exp=1713595378~hmac=c75e639f2eb7be4ffe691c6e8993f073d8e31e4fa3f3c4ac2199927b47b7eded&w=1060" alt="" class="h-full w-full object-cover object-center"/>
                  </div>
                </div>
                <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div class="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://img.freepik.com/free-photo/beautiful-asian-young-woman-creative-freelancer-working-laptop-computer-working-from-home-concept_640221-368.jpg?t=st=1713591840~exp=1713595440~hmac=3cf1333aa73f738b650f9286eb5846c8c3dc56bf3460466a311b70648b0171ca&w=1060" alt="" class="h-full w-full object-cover object-center"/>
                  </div>
                  <div class="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://img.freepik.com/free-photo/young-happy-businessman-using-laptop-while-having-lunch-break-home_637285-6031.jpg?t=st=1713591876~exp=1713595476~hmac=d3b8b11f5d60568a2bdfc578a4b00b729bfffe6e02d80b615673ab4bdc269ff0&w=1060" alt="" class="h-full w-full object-cover object-center"/>
                  </div>
                  <div class="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://img.freepik.com/free-photo/creative-reels-composition_23-2149711502.jpg?t=st=1713590906~exp=1713594506~hmac=b0ce9f4ca9dfef6b24d858106eec43747096ad0a8adb060ca2eed44153602e4f&w=360" alt="" class="h-full w-full object-cover object-center"/>
                  </div>
                </div>
                <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div class="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://img.freepik.com/free-photo/high-angle-hands-holding-smartphones_23-2149458425.jpg?t=st=1713591995~exp=1713595595~hmac=a023caf21446c7aaf8082265709628621a6ddbe5c226cd37613f046d57371fbe&w=1060" alt="" class="h-full w-full object-cover object-center"/>
                  </div>
                  <div class="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://img.freepik.com/free-photo/collage-people-using-reels_23-2149416500.jpg?t=st=1713592034~exp=1713595634~hmac=7b4d9057cd312a677400d7c3bf20118cca33501b3a753029984c19c143d8f459&w=740" alt="" class="h-full w-full object-cover object-center"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link href="/blog" class="inline-block rounded-md border border-transparent bg-[#76ABAE] px-8 py-3 text-center font-medium text-white hover:bg-[#31363F]">Shop Collection</Link>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}
