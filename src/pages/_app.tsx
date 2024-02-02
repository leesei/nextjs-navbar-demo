import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";

import Layout from "@/components/Layout";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
// Create a client
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Navbar demo</title>
        <meta property="og:title" content="Navbar demo" key="title" />
      </Head>
      <Layout className={`min-h-screen ${inter.className}`}>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
