import { ReactElement } from 'react'
import { useFieldContext } from '../../utils/form'

export default function NumberField({ label }: { label: string }): ReactElement {
  const field = useFieldContext<number>()

  return (
    <p>
      <label htmlFor={field.name}>{label}</label>
      <input
        id={field.name}
        name={field.name}
        type="number"
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={e => field.handleChange(e.target.valueAsNumber)}
      />
    </p>
  )
}
