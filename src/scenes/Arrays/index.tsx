import { ReactElement } from 'react'
import { useAppForm } from '../../utils/form'
import pSleep from '../../utils/pSleep'
import { Item, Button } from './styles'

type Person = { name: string; age: number }

const defaultPerson: Person = { name: 'John Doe', age: 18 }
const emptyPerson: Person = { name: '', age: 0 }

export default function Arrays(): ReactElement {
  const form = useAppForm({
    defaultValues: {
      people: [defaultPerson] as Array<Person>,
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
        e.stopPropagation()
        form.handleSubmit()
      }}
    >
      <h1>Arrays</h1>
      <form.AppField
        name="people"
        mode="array"
        validators={{
          onChange: ({ value }) => (value.length === 0 ? "Items list shouldn't be empty" : undefined),
        }}
      >
        {field => {
          return (
            <div>
              <p>People list</p>
              {field.state.value.map((_, i) => {
                // console.log('rendered item:', i)
                return (
                  <Item key={i}>
                    <p>Person {i + 1}</p>
                    <form.AppField
                      name={`people[${i}].name`}
                      validators={{ onChange: ({ value }) => (value === '' ? 'Please enter the name' : undefined) }}
                    >
                      {subField => (
                        <>
                          <subField.TextField label={`Name:`} />
                          <subField.FieldInfo />
                        </>
                      )}
                    </form.AppField>

                    <form.AppField name={`people[${i}].age`}>
                      {subField => <subField.NumberField label={`Age:`} />}
                    </form.AppField>

                    <Button onClick={() => field.removeValue(i)} type="button">
                      Remove person
                    </Button>
                  </Item>
                )
              })}
              <field.FieldInfo />
              <Button onClick={() => field.pushValue(emptyPerson)} type="button">
                Add person
              </Button>
            </div>
          )
        }}
      </form.AppField>
      <br />
      <form.AppForm>
        <form.SubmitButton />
      </form.AppForm>
    </form>
  )
}
