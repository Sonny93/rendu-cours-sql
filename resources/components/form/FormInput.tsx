import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export default function Input({
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
