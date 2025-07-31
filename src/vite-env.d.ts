/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_APP_DEV: boolean
    VITE_APP_PROD: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}