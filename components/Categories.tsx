import Link from "next/link";

export const Categories = ({ categories }) => {
  return (
    <nav className="sticky self-start mb-5 xl:top-10 lg:mb-0">
      <p className="mb-3 text-lg font-bold uppercase">categories</p>
      <div className="flex flex-wrap space-x-4 text-sm xl:space-y-3 xl:flex-col xl:space-x-0 lg:text-lg xl:flex-nowrap">
        {categories.categories.map(({ id, name }) => (
          <Link href={`/category/${name}`} key={id}>
            <a className="font-semibold text-gray-600 duration-150 hover:text-purple-700">
              {name}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};
