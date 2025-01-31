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
      name: 'mainDescription',
      type: 'text',
      title: 'Main Description',
      description: 'Main description of the yacht',
    }),

    defineField({
      name: 'shortDescription',
      type: 'text',
      title: 'Short Description',
      description: 'Short description of the yacht',
    }),

    defineField({
      name: 'moreDetailsTitle',
      type: 'string',
      title: 'More Details Title',
      description: 'Title for the more details section',
    }),

    defineField({
      name: 'builder',
      type: 'string',
      title: 'Builder',
      description: 'Builder of the yacht (name of the company)',
    }),

    defineField({
      name: 'moreDetails',
      type: 'text',
      title: 'More Details',
      description:
        'More details about the yacht. This will be displayed on the details page of the yacht',
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
      title: 'prices',
      name: 'prices',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'price', type: 'number', title: 'Price'},
            {name: 'type', type: 'string', title: 'type'},
          ],
        },
      ],
    }),
    defineField({
      name: 'cabins',
      type: 'number',
      title: 'Number of Cabins',
      description: 'Number of cabins in the vessel',
    }),

    defineField({
      name: 'thumbnail',
      type: 'image-type',
      title: 'Thumbnail',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      title: 'Gallery',
      of: [{type: 'reference', to: [{type: 'image-type'}]}],
      description: 'Gallery of images of the yacht',
    }),
  ],
})
