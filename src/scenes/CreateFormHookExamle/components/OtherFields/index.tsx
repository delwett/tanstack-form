import { formOpts, Gender } from '../../constants'
import { withForm } from '../../../../utils/form'

type Props = {
  title: string
}

const genderOptions = [
  { value: 'male', label: Gender.Male },
  { value: 'female', label: Gender.Female },
]

export const OtherFields = withForm({
  // we use options to infer form type
  ...formOpts,
  // we can define additional props
  props: {} as Props,
  render: function Render({ form, title }) {
    return (
      <>
        <h3>{title}</h3>
        <form.AppField name="gender" children={field => <field.SelectField label="Gender" options={genderOptions} />} />
      </>
    )
  },
})

export default OtherFields
