import { Suspense } from 'react'
import { ListOfPosts } from './ListOfPosts.jsx'

export default async function PostPage () {
    // use suspense to load the list of posts, level granularity
    return (
        <section>
            <Suspense fallback={<div>Loading posts...</div>}>
                <ListOfPosts />
            </Suspense>
        </section>
    )
}
