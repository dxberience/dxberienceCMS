import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'subCategory',
  type: 'document',
  title: 'Sub Category',
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
      options: {source: 'name'},
    }),
    defineField({name: 'image', type: 'image-type', title: 'Image', options: {hotspot: true}}),
  ],
})
