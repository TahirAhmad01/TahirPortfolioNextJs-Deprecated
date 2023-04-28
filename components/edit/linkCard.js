import Link from "next/link"

function LinkCard({link, name}) {
    return (
      <Link
        href={link}
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full px-4 py-3 my-3"
      >
        {/* <img
    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
    src="/docs/images/blog/image-4.jpg"
    alt=""
  /> */}
        <div className="h-10 w-10 rounded-full bg-gray-300 text-black flex items-center justify-center">
          <i className="bx bx-edit text-2xl"></i>
        </div>
        <div className="pl-4 capitalize">{name}</div>
      </Link>
    );
}

export default LinkCard
