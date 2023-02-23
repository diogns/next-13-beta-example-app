import Image from 'next/image'

const fetchComments = async (id) => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    // throw new Error('Error en comentarios')
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next: {
            revalidate: 60
        }
    }
    ).then(response => response.json())
}

export default async function Post ({ params }) {
    const { id } = params
    const comments = await fetchComments(id)
    return (
        <ul style={{ background: '#444', fontSize: '10px' }}>
            {comments.map(comment => (
                <li key={comment.id}>
                    <Image width='50' height='50' alt={comment.name} src={`https://i.pravatar.cc/50?u=${comment.email}`} />
                    <h4>{comment.name}</h4>
                    <p>{comment.body}</p>
                </li>
            ))}
        </ul>
    )
}
