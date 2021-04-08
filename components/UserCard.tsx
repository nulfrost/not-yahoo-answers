import { useSession } from "next-auth/client";

export const UserCard = () => {
  const [session] = useSession();

  return (
    <aside className="w-1/3 col-span-4 px-5 py-4 bg-gray-100 rounded-md">
      <div className="flex">
        <img
          src={session?.user?.image}
          alt={`${session?.user?.name}'s avatar`}
          className="w-12 h-12 rounded-full"
        />
        <p className="font-bold">Dane</p>
      </div>
    </aside>
  );
};
