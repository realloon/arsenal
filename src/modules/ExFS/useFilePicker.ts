export default async function useFilePicker() {
  const [handle] = await window.showOpenFilePicker()
  const file = await handle.getFile()
  return file
}
