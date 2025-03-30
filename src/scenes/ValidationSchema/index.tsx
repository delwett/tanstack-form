import { ReactElement } from 'react'
import pSleep from '../../utils/pSleep'
import { useAppForm } from '../../utils/form'
import { z } from 'zod'
import * as v from 'valibot'
import * as arktype from 'arktype'

const ZodSchema = z.object({
  firstName: z
    .string()
    .min(3, '[Zod] You must have a length of at least 3')
    .startsWith('A', "[Zod] First name must start with 'A'"),
  lastName: z.string().min(3, '[Zod] You must have a length of at least 3'),
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ValibotSchema = v.object({
  firstName: v.pipe(
    v.string(),
    v.minLength(3, '[Valibot] You must have a length of at least 3'),
    v.startsWith('A', "[Valibot] First name must start with 'A'"),
  ),
  lastName: v.pipe(v.string(), v.minLength(3, '[Valibot] You must have a length of at least 3')),
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ArkTypeSchema = arktype.type({
  firstName: 'string >= 3',
  lastName: 'string >= 3',
})

export default function ValidationAsync(): ReactElement {
  const form = useAppForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
    validators: {
      onChange: ZodSchema,
      // onChange: ValibotSchema,
      // onChange: ArkTypeSchema,
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
      <h1>Validation Schema</h1>
      <form.AppField
        name="firstName"
        children={field => (
          <>
            <field.TextField label="First Name:" />
            <field.FieldInfo />
          </>
        )}
      />
      <form.AppField
        name="lastName"
        children={field => (
          <>
            <field.TextField label="Last Name:" />
            <field.FieldInfo />
          </>
        )}
      />
      <form.AppForm>
        <form.SubmitButton />
      </form.AppForm>
    </form>
  )
}
