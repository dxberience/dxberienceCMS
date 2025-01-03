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

    defineField({
      name: 'category',
      type: 'reference',
      to: [{type: 'category'}],
      title: 'Category',
      description:
        'Category of the sub category (This is mandatory and needs to be filled accurately as the accuracy of the search depends on this)',
    }),
    defineField({
      name: 'image', type: 'image-type', title: 'Image', options: {hotspot: true}, 
      validation: (Rule) => Rule.required(),
    }),
  ],
})
