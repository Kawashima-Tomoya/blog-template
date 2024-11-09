import Link from 'next/link'
import { client } from '~/app/_util/newt-client'
import type { Post } from '~/app/_util/newt-client'

export default async function Page() {
  const data = await client.getContents<Post>({
    appUid: 'blog',
    modelUid: 'post',
  })

  return (
    <main>
      <h2 className="p-4">記事一覧</h2>
      <ul className="list-inside list-disc">
        {data.items.map(item => (
          <li key={item._id}>
            <Link href={`/post/${item._id}`} className="underline">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
