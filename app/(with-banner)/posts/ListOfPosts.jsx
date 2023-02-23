// import { useEffect, useState } from 'react' -> not use this, beacuse is a server component
import { LikeButton } from './LikeButton.jsx'
import Link from 'next/link.js'

const fetchPosts = () => {
    console.log('rendering fetchPosts...')
    // getStaticProps
    // return fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())

    // getServersideProps
    // return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' }).then(response => response.json())

    // incremental static regeneration
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60
        }
    }
    ).then(response => response.json())
}

export async function ListOfPosts () {
    // Not use this
    // const [posts, setPosts] = useState([])
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(response => response.json())
    //         .then(json => {
    //             setPosts(json)
    //         })
    // })

    console.log('rendering ListOfPosts...')
    // <Link href='/posts/[id]' as={`/posts/${post.id}`}>

    // Use this
    const posts = await fetchPosts()
    return posts.slice(0, 5).map(post => (
        <article key={post.id}>
            <Link href={`/posts/${post.id}`}>
                <h2 style={{ color: '#009f' }}>{post.title}</h2>
                <p>{post.body}</p>
                <LikeButton id={post.id} />
            </Link>
        </article>
    ))
}
