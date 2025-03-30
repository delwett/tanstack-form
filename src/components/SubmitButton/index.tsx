import { ReactElement } from 'react'
import { useFormContext } from '../../utils/form'

export default function SubmitButton(): ReactElement {
  const form = useFormContext()

  // console.log('rendered useFormContext')

  return (
    <form.Subscribe
      selector={state => [state.canSubmit, state.isSubmitting]}
      children={([canSubmit, isSubmitting]) => (
        <button type="submit" disabled={!canSubmit}>
          {isSubmitting ? '...' : 'Submit'}
        </button>
      )}
    />
  )
}
