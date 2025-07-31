/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    PROD: boolean
    DEV: boolean
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}