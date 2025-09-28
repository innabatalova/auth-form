import type { Route } from "./+types/home"
import { ConfigProvider, Layout, Card } from 'antd'

import AuthForm from "~/features/Auth/AuthForm"

import server from "~/mocks/server"

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Autorization Form" },
    { name: "description", content: "Log in, please!" },
  ]
}

if (process.env.NODE_ENV === "development") {
  server()
}


export default function Home() {
  return (
    <ConfigProvider theme={{
      token: { colorBgLayout: '#f5f5f5', fontFamily: 'SF Pro Text, sans-serif', controlHeightLG: 60},
      components: {
        Card: {
          bodyPadding: 0
        },
        Statistic: {
          contentFontSize: 14
        },
      },
    }}
    >
      <Layout style={{ height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
        <Card style={{ width: 440, padding: 32, borderRadius: 6 }} >
          <AuthForm />
        </Card>
      </Layout>
    </ConfigProvider>
  )
}


