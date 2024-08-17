interface Window {
  showOpenFilePicker?: typeof showOpenFilePicker
  showDirectoryPicker?: typeof showDirectoryPicker
}

interface ShowOpenFilePickerOptions {
  excludeAcceptAllOption: boolean
  multiple?: boolean
  types?: Array<{
    description: string
    accept: { [MIMEType: string]: string[] }
  }>
  startIn?: FileSystemHandle | string
}

declare function showOpenFilePicker(
  options?: ShowOpenFilePickerOptions
): Promise<Array<FileSystemFileHandle>>

interface showDirectoryPickerOptions {
  mode?: 'read' | 'reandwrite'
  startIn?: FileSystemHandle | string
}

declare function showDirectoryPicker(
  options?: showDirectoryPickerOptions
): Promise<FileSystemDirectoryHandle>

interface FileSystemDirectoryHandle {
  entries(): AsyncIterableIterator<[string, FileSystemHandle]>
}
