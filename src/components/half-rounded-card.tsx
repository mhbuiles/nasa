import { Skeleton } from "./lib";
import { classNames } from "@utils/formatters";

const HalfRoundedCardSkeletonEl = (
  <div className="grid h-full w-full items-center gap-y-2 rounded-r-2xl border border-white border-opacity-30 bg-white bg-opacity-30 bg-clip-padding p-5 backdrop-blur-3xl">
    <Skeleton width="w-4/5" />
    <Skeleton />
    <Skeleton />
    <Skeleton />
  </div>
);

const bgColor = {
  yellow: "bg-yellow",
  green: "bg-green",
  orange: "bg-orange",
  red: "bg-red",
  "light-green": "bg-light-green",
};

type HalfRoundedCardProps = {
  children: React.ReactNode;
  color: keyof typeof bgColor;
};

const HalfRoundedCard = ({
  children,
  color,
}: HalfRoundedCardProps): React.ReactElement => (
  <div className="group relative rounded-r-2xl border border-white border-opacity-50 bg-white bg-opacity-30 bg-clip-padding backdrop-blur-3xl">
    {children}
    <div
      className={classNames(
        bgColor[color],
        "absolute inset-y-3 -left-1 w-2 rounded-md"
      )}
    >
      <div
        className={classNames(
          "absolute inset-y-0 -inset-x-1 bg-opacity-0 blur-sm transition duration-500 group-hover:bg-opacity-100",
          bgColor[color]
        )}
        style={{ borderRadius: "100%" }}
      />
    </div>
  </div>
);

export { HalfRoundedCard, HalfRoundedCardSkeletonEl };
