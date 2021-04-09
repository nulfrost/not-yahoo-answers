import Link from "next/link";

export const Categories = () => {
  return (
    <nav className="sticky xl:top-[10px] xl:h-52 mb-5 lg:mb-0">
      <p className="mb-3 text-lg font-bold uppercase">categories</p>
      <div className="flex space-x-4 text-sm xl:flex-col xl:space-x-0 lg:text-lg">
        {["art", "technology", "business", "parenting", "news"].map(
          (category) => (
            <Link href={`/${category}`}>
              <a className="font-semibold text-gray-600 duration-150 hover:text-purple-700">
                {category}
              </a>
            </Link>
          )
        )}
      </div>
    </nav>
  );
};
