import { InertiaFormProps, useForm } from '@inertiajs/inertia-react';
import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';

export interface PostFormValues {
  titre: string;
  description: string;
  enseignant: string;
}

const DEFAULT_FORM_DATA: PostFormValues = {
  titre: '',
  description: '',
  enseignant: '',
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
        name="titre"
        id="titre"
        value={data.titre}
        error={errors.titre}
        placeholder="Titre"
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
        name="enseignant"
        id="enseignant"
        value={data.enseignant}
        error={errors.enseignant}
        placeholder="Enseignant"
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
