import { client } from '~/app/_util/newt-client'
import type { Post } from '~/app/_util/newt-client'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = await client.getContent<Post>({
    appUid: 'blog',
    modelUid: 'post',
    contentId: slug,
  })

  return (
    <div>
      <h1>{data.title}</h1>
      {/* eslint-disable-next-line react-dom/no-dangerously-set-innerhtml */}
      <article className="prose prose-base" dangerouslySetInnerHTML={{ __html: data.body }} />
    </div>
  )
}
