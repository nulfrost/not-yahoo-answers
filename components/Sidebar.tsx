export const Sidebar = () => {
  return (
    <aside className="">
      <p className="mb-3 text-lg font-bold uppercase">categories</p>
      <div className="space-y-3">
        {["Arts", "Technology", "Business", "Parenting", "News"].map(
          (category) => (
            <p className="font-semibold text-gray-600 duration-150  hover:text-purple-700">
              {category}
            </p>
          )
        )}
      </div>
    </aside>
  );
};
