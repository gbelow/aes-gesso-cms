import HomeClient from '@/components/HomeClient'
import { client } from '@/sanityStudio/lib/client'

export interface Service {
  _id: string
  title: string
  category:
    | 'drywall'
    | 'modular'
    | 'steelFrame'
    | 'convencional'
    | 'nichos'
    | 'rodaTeto'
    | '3d'
    | 'boiserie'
  images: Array<{
    _key: string
    asset: {
      _ref: string
      _type: 'reference'
    }
  }>
  description?: string
}

async function getServices(): Promise<Service[]> {
  const query = `*[_type == "services"] {
    _id,
    title,
    category,
    description,
    images
  }`

  return client.fetch(query)
}

export default async function Page() {
  const services = await getServices()

  return <HomeClient services={services} />
}