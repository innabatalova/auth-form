import type { Route } from "./+types/home"
import { ConfigProvider, Layout, Card } from 'antd'

import AuthForm from "~/features/Auth/AuthForm"

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Autorization Form" },
    { name: "description", content: "Log in, please!" },
  ]
}

export default function Home() {
  return (
    <ConfigProvider theme={{
      token: { colorBgLayout: '#f5f5f5', fontFamily: 'SF Pro Text, sans-serif', },
      components: {
        Card: {
          bodyPadding: 0
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
