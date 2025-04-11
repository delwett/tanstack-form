import { ReactElement } from 'react'
import pSleep from '../../utils/pSleep'
import { useAppForm } from '../../utils/form'
import OtherFields from './components/OtherFields'
import { formOpts } from './constants'

export default function CreateFormHookExample(): ReactElement {
  const form = useAppForm({
    ...formOpts,
    onSubmit: async ({ value }) => {
      await pSleep(1000)
      window.alert(JSON.stringify({ value }))
    },
  })

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        form.handleSubmit()
      }}
    >
      <h1>Personal Information</h1>

      {/* Components in `form.AppField` have access to the field context */}
      <form.AppField name="username" children={field => <field.TextField label="Full Name" />} />
      <form.AppField name="age" children={field => <field.NumberField label="Age" />} />

      <OtherFields form={form} title="Other Information" />

      {/* Components in `form.AppForm` have access to the form context */}
      <form.AppForm>
        <form.SubmitButton />
      </form.AppForm>
    </form>
  )
}
