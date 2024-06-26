import DesignPreview from "@/components/DesignPreview"
import { PrismaClient } from "@prisma/client"
import { db } from "@/db"
import { notFound } from "next/navigation"

type searchParams = {
  searchParams: {
    id: string | string[] | undefined
  }
}

const page = async ({searchParams}: searchParams) => {
  const {id} = searchParams

  if (!id || typeof id !== 'string') {
    return notFound()
  }

  const configuration = await db.configuration.findUnique({
    where: {
      id: id
    }
  })

  if (!configuration) {
    return notFound()
  }

  return (
    <DesignPreview configuration={configuration} />
  )
}

export default page