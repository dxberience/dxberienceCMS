import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'interest',
  type: 'document',
  title: 'Interest',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (Rule) => Rule.required(),
      options: {source: 'name', maxLength: 96},
    }),
  ],
})
