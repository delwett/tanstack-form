import { ReactElement } from 'react'
import pSleep from '../../utils/pSleep'
import { useAppForm } from '../../utils/form'

export default function Listeners(): ReactElement {
  const form = useAppForm({
    defaultValues: {
      country: '',
      province: '',
      value: 0,
      secondValue: 0,
    },
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
      <h1>Listeners</h1>
      <form.AppField
        name="country"
        listeners={{
          onChange: ({ value }) => {
            console.log(`Country changed to: ${value}, resetting province`)
            form.setFieldValue('province', '')
          },
        }}
      >
        {field => <field.TextField label="Country:" />}
      </form.AppField>
      <form.AppField name="province">{field => <field.TextField label="Province:" />}</form.AppField>

      {/* <form.AppField
        name="value"
        listeners={{
          onChange: ({ value }) => {
            console.log('Value changed')
            form.setFieldValue('secondValue', value * 2)
          },
        }}
      >
        {field => <field.NumberField label="Number:" />}
      </form.AppField>
      <form.AppField
        name="secondValue"
        listeners={{
          // lets break it, but it doesn't trigger first listener
          onChange: ({ value }) => {
            console.log('Second value changed')
            form.setFieldValue('value', value * 2)
          },
        }}
      >
        {field => <field.NumberField label="Doubled number:" />}
      </form.AppField> */}

      <form.AppForm>
        <form.SubmitButton />
      </form.AppForm>
    </form>
  )
}
