'use client'

import { use, useState, useTransition } from "react"
import Dropzone, { FileRejection } from "react-dropzone"
import { AiFillFolderOpen } from "react-icons/ai";
import ClipLoader from "react-spinners/ClipLoader";
import { CiImageOn } from "react-icons/ci";
import ProgressBar from "@ramonak/react-progress-bar";
import { useUploadThing } from "@/lib/uploadthing";
import { useRouter } from "next/navigation";

const Page = () => {
  const [isDragOver, setIsDragOver] = useState<boolean>(false)
  const onDropAccepted = (acceptedFiles: File[]) => {
    startUpload(acceptedFiles, { configId: undefined })

    setIsDragOver(false)
  }
  const onDropRejected = (rejectedFiles: FileRejection[]) => {
    const [file] = rejectedFiles

    setIsDragOver(false)
  }
  const [isPending, startTransition] = useTransition()
  const [uploadProgress, setUploadProgress] = useState<number>(0)

  const router = useRouter()
  const { startUpload, isUploading } = useUploadThing('imageUploader', {
    onClientUploadComplete: ([data]) => {
      const configId = data.serverData.configId
      startTransition(() => {
        router.push(`/configure/design?id=${configId}`)
      })
    },
    onUploadProgress(p) {
      setUploadProgress(p)
    },
  })

  return (
    <div className="h-[calc(70vh)] cursor-pointer">
      <Dropzone 
      onDropAccepted={onDropAccepted} 
      onDropRejected={onDropRejected}
      accept={{'image/png': ['.png'], 'image/jpg': ['.jpg'], 'image/jpeg': ['.jpeg']}}
      onDragEnter={() => setIsDragOver(true)}
      onDragLeave={() => setIsDragOver(false)}>
        {(state) => 
          <div className="h-full w-full flex-1 flex flex-col items-center justify-center" {...state.getRootProps()}>
            <input {...state.getInputProps()} />
            {isDragOver ? (
              <AiFillFolderOpen size={40} />
              ) : isUploading || isPending ? (
              <ClipLoader size={40} />
              ) : (
              <CiImageOn size={40} />
              )
            }
            <div className="flex flex-col justify-center mb-2 text-sm text-zinc-700">
              {isUploading ? (
                <div className="flex flex-col items-center">
                  <p className="mb-[20px]">Uploading...</p>
                  <ProgressBar completed={uploadProgress} className="w-[250px]" />
                </div>
                ) : isPending ? (
                  <div className="flex flex-col items-center">
                    <p>Redirection, please wait...</p>
                  </div>
                ) : isDragOver ? (
                  <span className="font-semibold">Drop file to upload</span>
                ) : (
                  <span className="font-semibold">Click to upload or drag file</span>
                )
              }

              {!isPending && <p className="text-center mt-2 text-[0.88rem]">PNG, JPG, JPEG</p>}
            </div>
          </div>
        }
      </Dropzone>
    </div>
  )
}

export default Page