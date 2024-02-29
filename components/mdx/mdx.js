import { useMDXComponent } from "next-contentlayer/hooks";
import PostLink from "./link";
import PostImage from "./image";
import PostBanner from "./banner";

const mdxComponents = {
  Link: PostLink,
  Image: PostImage,
  Banner: PostBanner,
};

export function Mdx({ code }) {
  const Component = useMDXComponent(code);

  return (
    <article className="blog-article prose-md prose py-8 lg:prose-lg prose-indigo blog-description text-justify tracking-tight dark:text-white	text-[18px]">
      <Component components={{ ...mdxComponents }} />
    </article>
  );
}
