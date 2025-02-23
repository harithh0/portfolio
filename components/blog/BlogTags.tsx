import { Tag } from '../Tag'

export function BlogTags({ tags, is_lab }: { tags: string[], is_lab: boolean }) {
  if (!tags || tags.length === 0) {
    return null
  }

  return (
    <div className="flex flex-wrap">
      {tags.map((tag) => (
        <Tag key={tag} text={tag} is_lab={is_lab}/>
      ))}
    </div>
  )
}
