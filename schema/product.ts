import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'product',
  type: 'document',
  title: 'Activities, Experiences or Events',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
      description: 'Name of the activity, experience or event',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {source: 'title'},
      validation: (Rule) => Rule.required(),
      description: 'URL friendly name of the activity, experience or event',
    }),
    defineField({
      name: 'caption',
      type: 'string',
      title: 'Caption',
      description: 'A Short description of the activity, experience or event on the details page',
    }),

    defineField({
      name: 'thumbnail',
      type: 'image-type',
      title: 'Thumbnail',
      options: {hotspot: true},
      description: 'Display Image of the activity, experience or event on the explore page',
    }),

    defineField({
      name: 'gallery',
      type: 'array',
      title: 'Gallery',
      of: [{type: 'reference', to: [{type: 'image-type'}]}],
      description: 'Gallery of images of the activity, experience or event on the details page',
    }),

    defineField({
      name: 'subCategory',
      type: 'reference',
      to: [{type: 'subCategory'}],
      title: 'Sub Category',
      description: 'Sub category of the activity, experience or event',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'category',
      type: 'reference', // Singular reference
      title: 'Category',
      to: [{type: 'category'}], // Reference to the 'category' type
      description:
        'Select the category this product belongs to. Only fill if the activity, experience or event does not have a sub category (Optional)',
    }),

    defineField({
      name: 'interest',
      type: 'array',
      title: 'Interest Tags',
      of: [{type: 'reference', to: [{type: 'interest'}]}],
      description: 'Interest tag associated with the activity, experience or event',
    }),

    defineField({
      name: 'shortDescription',
      type: 'text',
      title: 'Short Description',
      description:
        'Short description of the activity, experience or event of the product on the explore page',
    }),

    defineField({
      name: 'longDescription',
      type: 'array',
      title: 'Long Description of the product on the details page',
      of: [{type: 'block'}],
      description: 'Long description of the activity, experience or event on the details page',
    }),

    defineField({
      name: 'price',
      type: 'number',
      title: 'Price',
      description: 'Price of the activity, experience or event if available. NOTE: If the customer needs to request for price, leave this field blank',
    }),

    defineField({
      name: 'priceRate',
      type: 'string',
      title: 'Price Rate',
      description: 'Rate at which the activity, experience or event is charged (e.g PER DAY, PER PERSON etc.)',
    }),

    defineField({
      name: 'location',
      type: 'string',
      title: 'Location',
      description: 'Location of the activity, experience or event',
    }),

    defineField({name: 'startDate', type: 'datetime', title: 'Start Date'}),
    defineField({name: 'endDate', type: 'datetime', title: 'End Date'}),

    defineField({
      name: 'termsAndCondition',
      type: 'array',
      title: 'Terms and Conditions',
      of: [{type: 'block'}],
      description:
        'Terms and conditions of the activity, experience or event in Rich Text for the details page',
    }),
  ],
})
