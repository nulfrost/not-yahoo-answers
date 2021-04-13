import Link from "next/link";

export const Categories = ({ categories }) => {
  return (
    <nav className="sticky self-start mb-5 xl:top-10 lg:mb-0">
      <p className="mb-3 text-lg font-bold uppercase px-2">categories</p>
      <div className="flex flex-wrap space-x-4 text-sm xl:flex-col lg:text-lg xl:flex-nowrap xl:space-x-0">
        {categories?.map(({ id, name }) => (
          <Link href={`/category/${name}`} key={id}>
            <a className="font-semibold text-gray-600 duration-150 px-2 hover:bg-purple-200 hover:text-purple-700 rounded-md py-1 focus:outline-none focus:ring-2 ring-purple-700">
              {name}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};
