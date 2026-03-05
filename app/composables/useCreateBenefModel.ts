export const useCreateBenefModel = (sections: BuildFormSection[]) => {
  const model: Record<string, any> = reactive({})

  sections.forEach((section: BuildFormSection) => {
    section.fields.forEach((field: BuildFormField) => {
      model[field.fieldCode] = field.defaultValue ?? ''
      if (field.fieldType.toLowerCase() === 'phone_number') {
        model[`${field.fieldCode}_code`] = ''
      }
    })
  })

  model.files = {} as Record<string, string>

  return model
}
