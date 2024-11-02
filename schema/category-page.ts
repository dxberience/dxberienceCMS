import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'categoryPage',
  type: 'document',
  title: 'Category Page',
  fields: [
    defineField({
      name: 'name',
      type: 'reference',
      title: 'Category Name',
      to: [{ type: "category"}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headerImg',
      type: 'reference',
      title: 'Header Image',
      to: [{type: 'image-type'}],
    }),
    defineField({
      name: 'headerBgImg',
      type: 'reference',
      title: 'Header Background Image', 
      to: [{type: 'image-type'}],
    }),
    defineField({
      name: 'headerTitle', type: 'string', title: 'Header Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'headerCaption', type: 'string', title: 'Header Caption', validation: (Rule) => Rule.required(),}),
    defineField({name: 'sectionATitle', type: 'string', title: 'Section A Title', validation: (Rule) => Rule.required(),}),
    defineField({name: 'sectionADescription', type: 'text', title: 'Section A Description', validation: (Rule) => Rule.required(),}),
    defineField({
      name: 'sectionAImage',
      type: 'reference',
      title: 'Section A Image',
      to: [{type: 'image-type'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'sectionBHeader', type: 'string', title: 'Section B Header', validation: (Rule) => Rule.required(),}),
    defineField({name: 'sectionCHeader', type: 'string', title: 'Section C Header', validation: (Rule) => Rule.required(),}),
    defineField({name: 'sectionCDescription', type: 'text', title: 'Section C Description', validation: (Rule) => Rule.required(),}),
    defineField({
      name: 'sectionCVideo',
      type: 'reference',
      title: 'Section C Video',
      to: [{type: 'image-type'}],
    }),
    defineField({
      name: 'sectionCVideoThumbnail',
      type: 'reference',
      title: 'Section C Video Thumbnail',
      to: [{type: 'image-type'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sectionDReviews',
      type: 'array',
      title: 'Section D Reviews',
      of: [{type: 'reference', to: [{type: 'review'}]}],
    }),
  ],
})
