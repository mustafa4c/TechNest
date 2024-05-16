import Link from "next/link";

export default async function Post({post}) {

  return (
    <>
                 <article className="flex flex-col dark:bg-gray-50">
                 <Link href={`/blog/${post.id}`} aria-label={post.title}>
                <img src={post.thumbnail} />
                </Link>
                <div className="flex flex-col flex-1 p-6">
                    <Link href={`/blog/${post.id}`} className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">{post.brand}</Link>
                    <Link href={`/blog/${post.id}`}><h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{post.title}</h3></Link>
                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                        <span>{post.rating}🌟</span>
                        <span>{post.price}$</span>
                    </div>
                </div>
            </article>
    </>
  )
}
