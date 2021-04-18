import Link from "next/link";

export const Categories = ({ categories }) => {
  return (
    <nav className="sticky self-start mb-5 xl:top-10 lg:mb-0 xl:col-span-2">
      <p className="px-2 mb-3 text-lg font-bold uppercase">categories</p>
      <div className="flex flex-wrap text-sm xl:flex-col lg:text-lg xl:flex-nowrap xl:space-x-0">
        {categories?.map(({ id, name }) => (
          <Link href={`/category/${name}`} key={id}>
            <a className="px-2 py-1 text-gray-600 duration-150 rounded-md hover:bg-purple-50 hover:text-purple-700 focus:outline-none focus:ring-2 ring-purple-700">
              {name}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};
