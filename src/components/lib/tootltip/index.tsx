import Tippy, { TippyProps } from "@tippyjs/react";

type TooltipProps = Omit<TippyProps, "arrow">;

/**
 * @param {string} arrowClassName This class is applied directly to the arrow svg.
 */
export const Tooltip = ({
  className = "text-xs bg-black text-white font-light shadow-card border border-white border-opacity-20",
  ...tippyProps
}: TooltipProps): React.ReactElement => {
  return <Tippy className={className} arrow={false} {...tippyProps} />;
};
