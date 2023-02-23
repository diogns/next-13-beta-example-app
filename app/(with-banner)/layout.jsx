import { Counter } from './posts/Counter.jsx'
export default function PostsLayout ({ children }) {
    return (
        <div>
            <Counter />
            <marquee> Home &bull; Posts: El mejor canal de twitch</marquee>
            <h1>Este es el layout de los posts</h1>
            {children}
        </div>
    )
}
