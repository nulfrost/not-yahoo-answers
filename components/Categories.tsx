import Link from "next/link";

export const Categories = () => {
  return (
    <nav className="sticky top-[10px] h-52">
      <p className="mb-3 text-lg font-bold uppercase">categories</p>
      <div className="space-y-3">
        {["arts", "technology", "business", "parenting", "news"].map(
          (category) => (
            <Link href={`/${category}`}>
              <a className="block font-semibold text-gray-600 duration-150 hover:text-purple-700">
                {category}
              </a>
            </Link>
          )
        )}
      </div>
    </nav>
  );
};
