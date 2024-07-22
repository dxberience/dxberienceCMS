import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'image-type',
  type: 'document',
  title: 'Image',
  fields: [
    defineField({name: 'image', type: 'image', title: 'Image', options: {hotspot: true}}),
    defineField({name: 'alt', type: 'string', title: 'Alt Text'}),
  ],
})
