import { ReactElement } from 'react'
import { useFieldContext } from '../../utils/form'

type SelectFieldProps<T> = {
  label: string
  options: { value: T; label: string }[]
}

export default function SelectField<T extends string>(props: SelectFieldProps<T>): ReactElement {
  const { label, options } = props

  const field = useFieldContext<T>()

  return (
    <p>
      <label htmlFor={field.name}>{label}</label>
      <select
        id={field.name}
        name={field.name}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={e => field.handleChange(e.target.value as T)}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </p>
  )
}
