interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_SANITY_PROJECT_ID: string
    readonly VITE_SANITY_DATASET: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}