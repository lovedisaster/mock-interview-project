import { fetchData, dataSource, Article } from "../api/fetchData"

const resource = dataSource<Article[]>(fetchData());

export const Posts = () => {
    const data = resource.read();      
    return <section className="container">
        {
            data && data.map(post =>  <article className="container__post" key={post.title}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
            </article>)
        }
    </section>
}