import PostItem from "../../components/Simple Blog/post-item";
import Topics from "../../components/Simple Blog/topics";
import PopularPosts from "../../components/Simple Blog/popular-posts";
import withSimpleLayout from "../../components/Simple Home/layout";

export const metadata = {
  title: "Blog - Simple",
  description: "Page description",
};

const Blog = () => {
  return (
    <section className="relative dark:bg-[#151719]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl pb-12 md:pb-20 md:text-left">
            <h1 className="lg:text-[52px] md:text-[42px] text-[32px] text-[#191919] dark:text-[#D9E3EA] font-extrabold tracking-tighter mb-4">
              Type the way you talk
            </h1>
            <p className="text-xl text-gray-600 dark:text-[#9BA9B4]">
              Stay up to date on the latest from Simple and best news from the
              Dev world.
            </p>
          </div>

          {/* Main content */}
          <div className="md:flex md:justify-between">
            {/* Articles container */}
            {/* <div className="md:grow -mt-4">
              {allPosts.map((post, postIndex) => (
                <PostItem key={postIndex} {...post} />
              ))}
            </div> */}

            {/* Sidebar */}
            <aside className="relative mt-12 md:mt-0 md:w-64 md:ml-12 lg:ml-20 md:shrink-0">
              <PopularPosts />
              <Topics />
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withSimpleLayout(Blog);
