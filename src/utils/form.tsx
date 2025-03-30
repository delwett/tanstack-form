import { createFormHook, createFormHookContexts } from '@tanstack/react-form'
import TextField from '../components/TextField'
import FieldInfo from '../components/FieldInfo'
import SubmitButton from '../components/SubmitButton'
import NumberField from '../components/NumberField'
import SelectField from '../components/SelectField'

const { fieldContext, formContext, useFieldContext, useFormContext } = createFormHookContexts()

// Allow us to bind components to the form to keep type safety but reduce production boilerplate
// Define this once to have a generator of consistent form instances throughout your app
const { useAppForm, withForm } = createFormHook({
  fieldComponents: {
    TextField,
    NumberField,
    SelectField,
    FieldInfo,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
})

export { useFieldContext, useFormContext, useAppForm, withForm }
