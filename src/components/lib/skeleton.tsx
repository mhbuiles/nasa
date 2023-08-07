/* eslint-disable react/no-multi-comp
  --
  Splitting this two components is just too overwhelming.
*/

type SkeletonProps = {
  height?: string;
  width?: string;
};

/**
 * @param {string} height TailwindCSS height utility class
 * @param {string} width TailwindCSS width utility class
 */
const Skeleton = ({
  height = "h-4",
  width = "w-full",
}: SkeletonProps): React.ReactElement => (
  <div
    className={`${height} ${width} animate-pulse rounded-3xl bg-white bg-opacity-60`}
  />
);

type SkeletonCircleProps = SkeletonProps;

/**
 * @param {string} height TailwindCSS height utility class
 * @param {string} width TailwindCSS width utility class
 */
const SkeletonCircle = ({
  height = "h-4",
  width = "w-4",
}: SkeletonCircleProps): React.ReactElement => (
  <div
    className={`${height} ${width} animate-pulse rounded-full bg-white bg-opacity-60`}
  />
);

export { Skeleton, SkeletonCircle };
