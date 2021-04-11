import { useSession } from "next-auth/client";
import { HiOutlineLightBulb } from "react-icons/hi";

export const UserCard = () => {
  const [session] = useSession();

  return (
    <aside className="flex-col items-end self-start hidden space-y-4 lg:sticky lg:top-10 xl:flex">
      {session ? (
        <>
          {" "}
          <div className="flex items-center space-x-2">
            <img
              src={session?.user?.image}
              alt={`${session?.user?.name}'s avatar`}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="text-sm font-bold uppercase">
                {session?.user?.name}
              </p>
              <div
                className="flex text-xs font-semibold uppercase"
                title="Total Answer Upvotes"
              >
                <HiOutlineLightBulb className="w-6 h-6 text-purple-700" />
                <span className="block text-lg text-purple-700">400</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="text-purple-700 ">Sign in to answer questions</p>
        </>
      )}
    </aside>
  );
};
