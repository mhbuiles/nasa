import { SetStateAction } from "react";
import { Switch } from "@headlessui/react";
import { classNames } from "@utils/formatters";

type CustomSwitchProps = {
  checked: boolean;
  onChange: (value: SetStateAction<boolean>) => void;
  label: string;
};

export const CustomSwitch = ({
  checked,
  label,
  onChange,
}: CustomSwitchProps): React.ReactElement => (
  <div className="flex items-center py-16 mx-28 gap-5">
    <p className="text-xs">{label}</p>
    <Switch
      checked={checked}
      onChange={onChange}
      className={classNames(
        checked ? "bg-blue" : "bg-dark-blue",
        "relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75"
      )}
    >
      <span className="sr-only">{label}</span>
      <span
        aria-hidden="true"
        className={classNames(
          checked ? "translate-x-9" : "translate-x-0",
          "pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
        )}
      />
    </Switch>
  </div>
);
