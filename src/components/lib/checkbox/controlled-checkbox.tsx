type ControlledCheckboxProps = {
  name: string;
  label: React.ReactNode;
  description?: string;
  checked: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export const ControlledCheckbox = ({
  name,
  label,
  onChange,
  description,
  checked = false,
}: ControlledCheckboxProps): React.ReactElement => (
  <div className="flex items-start gap-x-3 font-light">
    <div className="flex items-start pt-0.5">
      <input
        id={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="rounded-sm border-white border-opacity-30 bg-black bg-opacity-10 text-blue backdrop-blur-3xl backdrop-brightness-[0.2] transition focus:ring-2 focus:ring-blue focus:ring-offset-0"
      />
    </div>
    <div className="text-sm">
      <label htmlFor={name} className="text-white">
        {label}
      </label>
      {description ? (
        <p id={`${name}-description`} className="text-white text-opacity-60">
          {description}
        </p>
      ) : null}
    </div>
  </div>
);
