import { Metadata } from "next";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import {z} from "zod"
import sharp from "sharp"
import { db } from "@/db";
import { PrismaClient } from "@prisma/client";
 
const f = createUploadthing();
 
const auth = (req: Request) => ({ id: "fakeId" });

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .input(z.object({ configId: z.string().optional() }))
    .middleware(async ({ input }: {input: any}) => {
      return ({ input })
    })
    .onUploadComplete(async ({ metadata, file }: {metadata: any, file: any}) => {
      const { configId } = metadata.input

      const res = await fetch(file.url)
      const buffer = await res.arrayBuffer()

      const imgMetadata = await sharp(buffer).metadata()
      const { width, height } = imgMetadata

      if (!configId && typeof height == 'number' && typeof width == 'number') {    // second and third conditions are just for typescript, so ignore them
        const configuration = await db.configuration.create({
          data: {
            imageUrl: file.url,
            height,
            width
          }
        })
        return { configId: configuration.id }
      } else {
        const updatedConfiguration = await db.configuration.update({
          where: {
            id: configId
          },
          data: {
            croppedImageUrl: file.url
          }
        })

        return { configId: updatedConfiguration.id }
      }
      
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;