import { ReactElement } from 'react'
import pSleep from '../../utils/pSleep'
import { useAppForm } from '../../utils/form'

export default function Validation(): ReactElement {
  const form = useAppForm({
    defaultValues: {
      fullName: '',
    },
    validators: {
      onChange: ({ value }) => {
        if (value.fullName.length < 5)
          return {
            form: 'Invalid data', // The `form` key is optional
            fields: {
              fullName: '[FORM] Name is too short',
            },
          }
        return
      },
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
      <h1>Validation</h1>
      <form.AppField
        name="fullName"
        validators={{
          onMount: ({ value }) => (value === '' ? "Hello, I'm mount error" : undefined),
          onBlur: ({ value }) => (value === '' ? 'Name is required' : undefined),
          onChange: ({ value }) => (value.length < 5 ? 'Name is too short' : undefined),
          onSubmit: ({ value }) => (value === 'error' ? 'Invalid name' : undefined),
        }}
        children={field => (
          <>
            <field.TextField label="Full Name" />
            <p>Errors: {field.state.meta.errors.join(', ')}</p>
            <p>ErrorMap:{JSON.stringify(field.state.meta.errorMap)}</p>
          </>
        )}
      />
      {/* <form.Subscribe
        selector={state => [state.errorMap]}
        children={([errorMap]) => <p>Form ErrorMap:{JSON.stringify(errorMap)}</p>}
      /> */}
      <form.AppForm>
        <form.SubmitButton />
      </form.AppForm>
    </form>
  )
}
