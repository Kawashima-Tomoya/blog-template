import type { Content } from 'newt-client-js'
import process from 'node:process'
import { createClient } from 'newt-client-js'

export const client = createClient({
  spaceUid: 'blog-001',
  token: process.env.API_KEY as string,
  apiType: 'cdn',
})

export interface Post extends Content {
  title: string
  body: string
}
