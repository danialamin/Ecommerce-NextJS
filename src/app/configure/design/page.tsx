import DesignConfigurator from "@/components/DesignConfigurator"
import { db } from "@/db"
import { Prisma } from "@prisma/client"
import Image from "next/image"
import { notFound } from "next/navigation"

type pageProps = {
  searchParams: {
    id: string | undefined
  }
}

const page = async ({searchParams}: pageProps) => {
  const { id } = searchParams

  const row = await db.configuration.findUnique({
    where: { id }
  })
  
  if (!row) {
    return notFound()
  }
  return (
    <DesignConfigurator 
    configId={row.id}
    imageUrl={row.imageUrl}
    imageDimensions={{width: row.width, height: row.height}} 
    />
  )
}

export default page