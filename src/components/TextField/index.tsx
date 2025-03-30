import { HTMLInputTypeAttribute, ReactElement } from 'react'
import { useFieldContext } from '../../utils/form'

type TextFieldProps = {
  label: string
  type?: HTMLInputTypeAttribute
}

export default function TextField(props: TextFieldProps): ReactElement {
  const { label, type } = props

  const field = useFieldContext<string>()

  // console.log('rendered useFieldContext')

  return (
    <p>
      <label htmlFor={field.name}>{label}</label>
      <input
        id={field.name}
        name={field.name}
        type={type}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={e => field.handleChange(e.target.value)}
      />
    </p>
  )
}
