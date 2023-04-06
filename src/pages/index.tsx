import Layout from '@/components/template/Layout'
import Section from '@/components/template/Section'

export default function Home() {
    return (
        <Layout>
            <Section />
        </Layout>
    )
}

export async function getServerSideProps() {
    return {
        props: {}, // will be passed to the page component as props
    }
}
