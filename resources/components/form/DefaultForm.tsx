import { InertiaFormProps, useForm } from '@inertiajs/inertia-react';
import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';

export interface PostFormValues {
  title: string;
  description: string;
  teacher: string;
}

const DEFAULT_FORM_DATA: PostFormValues = {
  title: '',
  description: '',
  teacher: '',
};

export default function DefaultForm({
  title,
  onSubmit,
  defaultData = DEFAULT_FORM_DATA,
  children,
}: {
  title: string;
  onSubmit: (submit: InertiaFormProps['submit']) => void;
  defaultData?: typeof DEFAULT_FORM_DATA;
  children?: ReactNode;
}) {
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
      <Input
        // @ts-ignore
        onChange={handleChange}
        name="title"
        id="title"
        value={data.title}
        error={errors.title}
        placeholder="Title"
      />
      <Input
        // @ts-ignore
        onChange={handleChange}
        name="description"
        id="description"
        value={data.description}
        error={errors.description}
        placeholder="Description"
      />
      <Input
        // @ts-ignore
        onChange={handleChange}
        name="teacher"
        id="teacher"
        value={data.teacher}
        error={errors.teacher}
        placeholder="Teacher"
      />
      {children && children}
    </form>
  );
}

function Input({
  onChange,
  error,
  ...props
}: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  label: string;
  onChange: (key: string, value: string) => void;
  error?: string;
}) {
  return (
    <div className="field">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        {...props}
        name={props.name}
        id={props.name}
        onChange={(e) => onChange(props.name!, e.target.value)}
        value={props.value}
      />
      {error && <p className="legend">{error}</p>}
    </div>
  );
}