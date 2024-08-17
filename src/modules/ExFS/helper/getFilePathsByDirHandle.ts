export default async function getFilePathsByDirHandle(
  dirHandle: FileSystemDirectoryHandle,
  prefix = ''
): Promise<string[]> {
  let paths: string[] = []
  for await (const [name, handle] of dirHandle.entries()) {
    if (handle.kind === 'file') {
      paths.push(`${prefix}${name}`)
    } else if (handle.kind === 'directory') {
      const subPaths = await getFilePathsByDirHandle(
        <FileSystemDirectoryHandle>handle,
        `${prefix}${name}/`
      )
      paths = paths.concat(subPaths)
    }
  }
  return paths
}
