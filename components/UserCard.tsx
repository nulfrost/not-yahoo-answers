import { useSession } from "next-auth/client";
import { HiOutlineLightBulb } from "react-icons/hi";

export const UserCard = ({ answeredQuestions }) => {
  const [session] = useSession();

  return (
    <aside className="flex-col items-end self-start hidden col-span-2 space-y-4 lg:sticky lg:top-10 xl:flex">
      {session ? (
        <>
          {" "}
          <div className="flex items-center space-x-2">
            <div>
              <p className="text-sm font-bold uppercase">
                {session?.user?.name}
              </p>
              <div
                className="flex items-center font-semibold uppercase"
                title="total answers"
              >
                <HiOutlineLightBulb className="text-purple-700 w-7 h-7" />
                <span className="block text-lg text-purple-700">
                  {answeredQuestions?.length}
                </span>
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
