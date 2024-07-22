import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'review',
  type: 'document',
  title: 'Review',
  fields: [
    defineField({name: 'reviewerName', type: 'string', title: 'Reviewer Name'}),
    defineField({name: 'message', type: 'text', title: 'Message'}),
    defineField({
      name: 'stars',
      type: 'number',
      title: 'Stars',
      validation: (Rule) => Rule.min(0).max(5),
    }),
  ],
})
