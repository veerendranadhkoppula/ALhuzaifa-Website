import { withPayload } from '@payloadcms/next/withPayload'

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL ?? 'http://localhost:3000'
const serverHostname = new URL(serverUrl).hostname
const serverPort = new URL(serverUrl).port
const serverProtocol = new URL(serverUrl).protocol.replace(':', '')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: serverProtocol,
        hostname: serverHostname,
        ...(serverPort ? { port: serverPort } : {}),
        pathname: '/**',
      },
    ],
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }
    return webpackConfig
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  serverRuntimeConfig: {
    // Allow larger file uploads (30MB for PDFs)
    bodyParser: {
      sizeLimit: '50mb',
    },
  },
  // Also configure API routes to accept larger payloads
  api: {
    bodyParser: {
      sizeLimit: '50mb',
    },
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
