import getFilePathsByDirHandle from './helper/getFilePathsByDirHandle'
import getFileByPath from './helper/getFileByPath'

export default async function useDirPicker(
  filterCallbackFns: Array<(path: string) => boolean>
) {
  const dirHandle = await window.showDirectoryPicker()
  const paths = await getFilePathsByDirHandle(dirHandle)

  return await Promise.all(
    filterCallbackFns
      .map(filterCallbackFn =>
        paths
          .filter(path => filterCallbackFn(path))
          .map(async path => await getFileByPath(dirHandle, path))
      )
      .map(async filteredPaths => await Promise.all(filteredPaths))
  )
}
