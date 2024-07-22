import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'category',
  type: 'document',
  title: 'Category',
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
    defineField({
      name: 'subCategories',
      type: 'array',
      title: 'Sub Categories',
      of: [{type: 'reference', to: [{type: 'subCategory'}]}],
    }),
  ],
})
