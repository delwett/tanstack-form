import { ReactElement } from 'react'
import pSleep from '../../utils/pSleep'
import { useAppForm } from '../../utils/form'

export default function ValidationAsync(): ReactElement {
  const form = useAppForm({
    defaultValues: {
      age: 0,
    },
    onSubmit: async ({ value }) => {
      await pSleep(1000)
      window.alert(JSON.stringify({ value }))
    },
    onSubmitInvalid: () => {
      window.alert('You have problem in the form!')
    },
  })

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        form.handleSubmit()
      }}
    >
      <h1>Validation Async</h1>
      <form.AppField
        name="age"
        asyncAlways={false}
        asyncDebounceMs={2000}
        validators={{
          onChange: ({ value }) => (value < 5 ? 'You must be at least 5' : undefined),
          onChangeAsync: async ({ value }) => {
            console.log('onChangeAsync called')
            const currentAge = 7
            return value < currentAge ? 'You can only increase the age' : undefined
          },
        }}
        children={field => (
          <>
            <field.NumberField label="Age" />
            <p>IsValidating: {field.state.meta.isValidating ? 'true' : 'false'}</p>
            <p>Errors: {field.state.meta.errors.join(', ')}</p>
            <p>ErrorMap:{JSON.stringify(field.state.meta.errorMap)}</p>
          </>
        )}
      />
      <form.AppForm>
        <form.SubmitButton />
      </form.AppForm>
    </form>
  )
}
