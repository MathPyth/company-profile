import Giscus, { Repo, Theme } from '@giscus/react'



export default function Comment() {
    return (
        <Giscus
            key={'light'}
            repo={(process.env.NEXT_PUBLIC_GISCUS_REPO as Repo) || ''}
            repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID || ''}
            category="General"
            categoryId="DIC_kwDOJODPAs4CV1HN"
            mapping="pathname"
            reactionsEnabled="0"
            emitMetadata="0"
            theme={'light' as Theme}

        />
    )
}
