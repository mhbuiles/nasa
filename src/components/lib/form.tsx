import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormProps,
  UseFormReturn,
  useForm,
} from "react-hook-form";

type FormProps<TFormValues extends FieldValues> = {
  className?: string;
  onSubmit?: SubmitHandler<TFormValues>;
  children: React.ReactNode;
  useFormProps?: UseFormProps<TFormValues>;
  formMethods?: undefined;
};

type FormWithFormMethodsProps<TFormValues extends FieldValues> = {
  className?: string;
  onSubmit?: SubmitHandler<TFormValues>;
  children: React.ReactNode;
  useFormProps?: undefined;
  formMethods: UseFormReturn<TFormValues>;
};

export const Form = <TFormValues extends Record<string, unknown>>({
  onSubmit,
  children,
  className,
  style,
  formMethods,
  useFormProps,
}: (FormProps<TFormValues> | FormWithFormMethodsProps<TFormValues>) &
  Pick<React.HTMLAttributes<HTMLFormElement>, "style">): React.ReactElement => {
  const defaultMethods = useForm<TFormValues>(useFormProps);

  const methods = formMethods ? formMethods : defaultMethods;

  return (
    <FormProvider {...methods}>
      <form
        className={className}
        style={style}
        onSubmit={onSubmit ? methods.handleSubmit(onSubmit) : undefined}
      >
        {children}
      </form>
    </FormProvider>
  );
};
