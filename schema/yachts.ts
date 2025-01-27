import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'yachts',
  type: 'document',
  title: 'Yachts',

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
      name: 'length',
      type: 'number',
      title: 'Vessel Length',
      description: 'Length of the vessel in ft',
    }),
    defineField({
      name: 'capacity',
      type: 'number',
      title: 'Vessel Capacity',
      description: 'Number of people the vessel can accommodate',
    }),
    defineField({
      name: 'buildDate',
      type: 'date',
      title: 'Build Date',
      description: 'Year the vessel was built',
      options: {
        dateFormat: 'YYYY',
      },
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price',
      description: 'Price of the vessel',
    }),
    defineField({
      name: 'cabins',
      type: 'number',
      title: 'Number of Cabins',
      description: 'Number of cabins in the vessel',
    }),

    defineField({name: 'image', type: 'image-type', title: 'Image', options: {hotspot: true}}),
  ],
})
