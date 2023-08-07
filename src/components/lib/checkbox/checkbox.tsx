import { ErrorMessage } from "@hookform/error-message";
import { classNames } from "@utils/formatters";

import {
  RegisterOptions,
  UseFormReturn,
  useFormContext,
} from "react-hook-form";

type CheckboxProps = {
  name: string;
  label: React.ReactNode;
  description?: string;
  defaultChecked?: boolean;
  rules?: RegisterOptions | ((formContext: UseFormReturn) => RegisterOptions);
};

export const Checkbox = ({
  name,
  label,
  rules,
  description,
  defaultChecked = false,
}: CheckboxProps): React.ReactElement => {
  const context = useFormContext();
  const {
    register,
    formState: { errors },
  } = context;
  const isError = errors[name] ? true : false;

  return (
    <div className="relative pb-7 font-light">
      <div className="flex items-start gap-x-3">
        <div className="flex items-start pt-0.5">
          <input
            id={name}
            aria-describedby={`${name}-description`}
            type="checkbox"
            defaultChecked={defaultChecked}
            aria-invalid={isError}
            className={classNames(
              isError
                ? "border-red focus:ring-red"
                : "border-white border-opacity-30 focus:ring-blue",
              "rounded-sm bg-black bg-opacity-10 text-blue backdrop-blur-3xl backdrop-brightness-[0.2] transition focus:ring-2 focus:ring-offset-0"
            )}
            {...register(
              name,
              typeof rules === "function" ? rules(context) : rules
            )}
          />
        </div>
        <div className="text-sm">
          <label htmlFor={name} className="text-white">
            {label}
          </label>
          {description ? (
            <p
              id={`${name}-description`}
              className="text-white text-opacity-60"
            >
              {description}
            </p>
          ) : null}
        </div>
      </div>
      <ErrorMessage
        name={name}
        errors={errors}
        as={
          <p
            role="alert"
            className="absolute bottom-1 left-0.5 text-sm text-red"
          />
        }
      />
    </div>
  );
};
