import { ReactElement } from 'react'
import { useFieldContext } from '../../utils/form'
import { ErrorText } from './styles'

export default function FieldInfo(): ReactElement {
  const field = useFieldContext()

  return (
    <p>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <ErrorText style={{ color: 'red' }}>
          {field.state.meta.errors.map(e => (typeof e === 'string' ? e : e.message)).join(', ')}
        </ErrorText>
      ) : null}
      {field.state.meta.isValidating ? 'Validating...' : null}
    </p>
  )
}
