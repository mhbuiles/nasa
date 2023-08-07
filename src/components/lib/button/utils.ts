const appearances = {
  primary: [
    "bg-blue border-transparent",
    {
      idle: "text-white hover:border-blue hover:bg-dark-blue",
      loading: "opacity-40 text-transparent cursor-not-allowed",
      disabled: "opacity-40 text-white cursor-not-allowed",
    },
  ],
  secondary: [
    "border-blue bg-transparent",
    {
      idle: "text-white hover:border-transparent hover:bg-blue",
      loading: "opacity-40 text-transparent cursor-not-allowed",
      disabled: "opacity-40 text-white cursor-not-allowed",
    },
  ],
} as const;

const buttonSizes = {
  sm: [
    "text-sm px-4 py-2",
    {
      leftIcon: "-ml-1 mr-2 h-5 w-5",
      rightIcon: "ml-2 -mr-1 h-5 w-5",
    },
  ],
  md: [
    "text-base px-4 py-2",
    {
      leftIcon: "-ml-1 mr-3 h-5 w-5",
      rightIcon: "ml-3 -mr-1 h-5 w-5",
    },
  ],
  lg: [
    "text-base px-6 py-3",
    {
      leftIcon: "-ml-1 mr-3 h-5 w-5",
      rightIcon: "ml-3 -mr-1 h-5 w-5",
    },
  ],
} as const;

const iconButtonSizes = {
  sm: "p-2",
  md: "p-2",
  lg: "p-3",
};

type ButtonBaseProps = {
  children?: string;
  block?: boolean;
  rounded?: boolean;
  rightIcon?: React.VFC<{ className: string }>;
  leftIcon?: React.VFC<{ className: string }>;
  size?: keyof typeof buttonSizes;
  appearance?: keyof typeof appearances;
};

export { appearances, buttonSizes, iconButtonSizes };
export type { ButtonBaseProps };
