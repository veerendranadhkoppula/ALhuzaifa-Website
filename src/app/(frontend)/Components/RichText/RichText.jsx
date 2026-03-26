import React from 'react'
import {
  SerializedEditorState,
  convertLexicalToHTML,
} from '@payloadcms/richtext-lexical/html'

const RichText = ({ content }) => {
  if (!content) return null

  const html = convertLexicalToHTML({ data: content })

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  )
}

export default RichText