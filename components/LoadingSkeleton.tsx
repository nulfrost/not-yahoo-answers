import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const LoadingSkeleton = () => {
  return (
    <>
      {Array.from({ length: 3 }, (_, index) => (
        <>
          <div
            className="flex flex-col py-4 rounded-md xl:max-w-3xl"
            key={index}
          >
            <SkeletonTheme color="#DDD6FE">
              <Skeleton width={350} />
              <Skeleton width={500} />
              <div className="mb-5">
                <Skeleton width={200} />
              </div>
              <div className="mt-10">
                <Skeleton width={100} />
              </div>
            </SkeletonTheme>
          </div>
        </>
      ))}
    </>
  );
};
