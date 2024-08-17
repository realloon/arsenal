export default async function getFileByPath(
  dirHandle: FileSystemDirectoryHandle,
  path: string
) {
  const handle = await getFileHandleFromPath(dirHandle, path)
  return await handle.getFile()
}

// helper
async function getFileHandleFromPath(
  dirHandle: FileSystemDirectoryHandle,
  path: string
): Promise<FileSystemFileHandle> {
  const segments = path.split('/')
  let curHandle = dirHandle

  for (const segment of segments.slice(0, segments.length - 1)) {
    if (segment === '') continue // ignore empty.
    curHandle = await curHandle.getDirectoryHandle(segment, {
      create: false,
    })
  }

  const fileHandle = await curHandle.getFileHandle(
    segments[segments.length - 1],
    { create: false }
  )

  return fileHandle
}
