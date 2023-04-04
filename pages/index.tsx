import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { useEffect } from "react";

export default function Home({ allPostsData }) {
    useEffect(() => {
        console.log(allPostsData);
    });
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    I have a degree in Computer Science with a major in Computer
                    Network Administration. I work on system and network
                    administration projects, but also on the creation of
                    websites and web applications. I enjoy thinking and
                    investing my time on new projects, because each project is
                    unique and you learn new things and gain experience as long
                    as you invest yourself in it; and that's what I do or try to
                    do the best I can. I am very open and it is always a
                    pleasure to exchange, to combine common efforts and to
                    discover new horizons.
                </p>
            </section>{" "}
            {/* Add this <section> tag below the existing <section> tag */}
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData?.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}
export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}
