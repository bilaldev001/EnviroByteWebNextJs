import Link from "next/link";
import ImageDisplay from "../Utils/Image";

export default function PostItem({ ...props }) {
  return (
    <article className="flex items-center py-4 border-b border-gray-200">
      <div>
        <header>
          <h2 className="h4 mb-2">
            <Link
              href={`/blogs/${props.id}`}
              className="hover:underline text-[#191919] dark:text-[#D9E3EA] font-bold"
            >
              {props.title}
            </Link>
          </h2>
        </header>
        <div className="text-lg text-gray-600 dark:text-[#9BA9B4] mb-4">
          {props?.description}
        </div>
        <footer className="text-sm">
          <div className="flex items-center">
            <div className="flex shrink-0 mr-3">
              <a className="relative" href="#0">
                <span className="absolute inset-0 -m-px" aria-hidden="true">
                  <span className="absolute inset-0 -m-px bg-white rounded-full"></span>
                </span>
                <ImageDisplay
                  className="relative rounded-full w-[32px] h-[32px]"
                  src={props.authorImg || "error"}
                  alt={props.author}
                />
              </a>
            </div>
            <div>
              <span className="text-gray-600 dark:text-[#9BA9B4]">By </span>
              <a
                className="hover:underline text-[#191919] dark:text-[#D9E3EA] font-semibold"
                href="#0"
              >
                {props.author || "Author Name"}
              </a>
              <span className="text-gray-600 dark:text-[#9BA9B4]">
                · {new Date(props?.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </footer>
      </div>
      <Link href={`/blogs/${props.id}`} className="block shrink-0 ml-6">
        <span className="sr-only">Read more</span>
        <svg
          className="w-4 h-4 fill-current text-blue-600"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
        </svg>
      </Link>
    </article>
  );
}
