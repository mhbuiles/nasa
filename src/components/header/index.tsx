import { formatDate } from "@utils/formatters";

export const Header = (): React.ReactElement => {
  const date = new Date().toString();

  return (
    <div className="flex items-center justify-between bg-dark-blue h-20 p-5">
      <h4 className="text-blue text-3xl font-bold">Mars Rovers Photos</h4>
      <p className="text-blue font-bold">{formatDate(date)}</p>
    </div>
  );
};
