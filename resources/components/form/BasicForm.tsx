import { InertiaFormProps, useForm } from '@inertiajs/inertia-react';
import { InputHTMLAttributes, ReactNode, useMemo } from 'react';
import FormInput from './FormInput';

interface FormField {
  label: string;
  name: string;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  value?: string;
}

export default function BasicForm({
  title,
  onSubmit,
  children,
  disableInputs = false,
  fields = [],
}: {
  title: string;
  onSubmit: (submit: InertiaFormProps['submit']) => void;
  children?: ReactNode;
  disableInputs?: boolean;
  fields: FormField[];
}) {
  const defaultData = useMemo(
    () =>
      fields.reduce((acc, field) => {
        acc[field.name] = field.value || '';
        return acc;
      }, {}),
    []
  );
  const { data, setData, errors, submit } = useForm(defaultData);

  function handleChange(key: string, value: string) {
    setData((values) => ({
      ...values,
      [key]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(submit);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="reset">{title}</h1>
      {fields.map(({ label, name, type = 'text' }) => (
        <FormInput
          // @ts-ignore
          onChange={handleChange}
          label={label}
          name={name}
          id={name}
          value={data[name]}
          error={errors[name]}
          placeholder={label}
          type={type}
          disabled={disableInputs}
        />
      ))}
      {children && children}
    </form>
  );
}
