type CardProps = {
  children?: React.ReactNode;
  topContent?: React.ReactNode;
};

export const Card = ({
  children,
  topContent,
}: CardProps): React.ReactElement => (
  <div className="relative rounded-3xl border border-white border-opacity-50 bg-dark-blue bg-clip-padding shadow-card backdrop-blur-3xl">
    <div className="absolute inset-x-0 -top-12 grid place-items-center text-dark-blue">
      {topContent}
    </div>
    {children}
  </div>
);
