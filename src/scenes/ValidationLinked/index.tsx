import { ReactElement } from 'react'
import pSleep from '../../utils/pSleep'
import { useAppForm } from '../../utils/form'

export default function ValidationLinked(): ReactElement {
  const form = useAppForm({
    defaultValues: {
      password: '',
      passwordConfirm: '',
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
      <h1>Validation Linked</h1>
      <form.AppField name="password">{field => <field.TextField label="Password" type="password" />}</form.AppField>
      <form.AppField
        name="passwordConfirm"
        validators={{
          onChangeListenTo: ['password'],
          onChange: ({ value, fieldApi }) => {
            if (value !== fieldApi.form.getFieldValue('password')) {
              return 'Passwords do not match'
            }
            return undefined
          },
        }}
      >
        {field => (
          <>
            <field.TextField label="Confirm Password" type="password" />
            <field.FieldInfo />
          </>
        )}
      </form.AppField>
      <form.AppForm>
        <form.SubmitButton />
      </form.AppForm>
    </form>
  )
}
