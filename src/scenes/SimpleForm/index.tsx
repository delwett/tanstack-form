import { faker } from '@faker-js/faker'
import { useForm } from '@tanstack/react-form'
import { useCallback, useState } from 'react'
import pSleep from '../../utils/pSleep'

type Meta = { test: number }

export default function SimpleForm() {
  const [defaultValues, setDefaultValues] = useState({
    firstName: '123',
    additionalData: {
      lastName: '',
    },
  })

  const form = useForm({
    defaultValues,
    onSubmitMeta: {} as Meta,
    onSubmit: async ({ value, meta }) => {
      await pSleep(1000)
      window.alert(JSON.stringify({ value, meta }))
    },
  })

  // console.log(form)

  // const additionalData = useStore(form.store, state => state.values.additionalData)
  // console.log(additionalData)

  const handleModifyClick = useCallback(() => {
    setDefaultValues({
      firstName: faker.person.firstName(),
      additionalData: {
        lastName: faker.person.lastName(),
      },
    })
  }, [])

  // useEffect(() => {
  //   form.reset(defaultValues)
  // }, [form, defaultValues])

  return (
    <div>
      <h1>Simple Form</h1>
      <button onClick={handleModifyClick}>Modify Default Values</button>
      <form
        onSubmit={e => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit({ test: Math.random() })
        }}
      >
        <p>
          <form.Field
            name="firstName"
            // defaultValue="testme"
            children={field => {
              // console.log(field.name, field.state)
              return (
                <>
                  <label htmlFor={field.name}>First Name:</label>
                  <input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={e => field.handleChange(e.target.value)}
                  />
                </>
              )
            }}
          />
        </p>
        <p>
          <form.Field
            name="additionalData.lastName"
            children={field => (
              <>
                <label htmlFor={field.name}>Last Name:</label>
                <input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={e => field.handleChange(e.target.value)}
                />
              </>
            )}
          />
        </p>
        <form.Subscribe
          selector={state => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <button type="submit" disabled={!canSubmit}>
              {isSubmitting ? '...' : 'Submit'}
            </button>
          )}
        />
      </form>
    </div>
  )
}
