import { formOptions } from '@tanstack/react-form'

export enum Gender {
  Male = 'male',
  Female = 'female',
}

export const formOpts = formOptions({
  defaultValues: {
    username: '',
    age: 0,
    gender: Gender.Male,
  },
})
