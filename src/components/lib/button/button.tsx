import { FaSpinner } from "react-icons/fa";
import { classNames } from "@utils/formatters";
import { forwardRef } from "react";
import { ButtonBaseProps, appearances, buttonSizes } from "./utils";

type ButtonProps = {
  type?: "submit" | "button" | "reset";
  status?: keyof (typeof appearances)["primary"][1];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loadingText?: string;
} & ButtonBaseProps;

const Button = forwardRef(
  (
    {
      children,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      appearance = "primary",
      block = false,
      rounded = false,
      size = "sm",
      status = "idle",
      type = "submit",
      onClick,
      loadingText,
    }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>
  ): React.ReactElement => (
    <button
      type={type}
      ref={ref}
      onClick={onClick}
      disabled={status === "idle" ? false : true}
      className={classNames(
        block ? "flex w-full" : "inline-flex",
        rounded ? "rounded-full" : "rounded-3xl",
        buttonSizes[size][0],
        appearances[appearance][0],
        appearances[appearance][1][status],
        "relative items-center justify-center border-2 font-bold transition focus:outline-none focus:ring-2 focus:ring-blue"
      )}
    >
      {status === "loading" && !loadingText ? (
        <div className="absolute inset-0 grid h-full w-full place-items-center rounded-3xl">
          <FaSpinner
            className="h-5 w-5 animate-spin text-white"
            aria-label="Loading..."
          />
        </div>
      ) : null}
      {status === "loading" && loadingText ? (
        <FaSpinner
          aria-label="Loading..."
          className={classNames(
            buttonSizes[size][1]["leftIcon"],
            "animate-spin text-white"
          )}
        />
      ) : LeftIcon ? (
        <LeftIcon className={buttonSizes[size][1]["leftIcon"]} />
      ) : null}
      {status === "loading" && loadingText ? (
        <span className="text-white">{loadingText}</span>
      ) : (
        children
      )}
      {RightIcon ? (
        <RightIcon className={buttonSizes[size][1]["rightIcon"]} />
      ) : null}
    </button>
  )
);

export { Button };
export type { ButtonProps };
