import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({ blogPosts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {blogPosts.map((blogPost) => {
        return <h1 key={blogPost.title}>{blogPost.title}</h1>
      })}
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch(
    'https://api.github.com/repos/mtliendo/slack-link-surfer/issues',
    {
      headers: {
        Authorization: `token ${process.env.GH_TOKEN}`,
      },
    }
  )
  const blogPosts = await response.json()
  console.log({ blogPosts })
  console.log('laoding')
  console.log(`token ${process.env.GH_TOKEN}`)
  return { props: { blogPosts }, revalidate: 60 }
}
