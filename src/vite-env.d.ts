/// <reference types="vite/client" />

interface ImportMetaEnv {
    NODE_ENV: string
    DEV: boolean
    PROD: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}