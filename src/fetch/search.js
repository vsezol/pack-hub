export default async (text, from, size) => {
  const base = 'https://registry.npmjs.com/-/v1/search'
  const response = await fetch(`${base}?text=${text}&from=${from}&size=${size}`)
  const { total, objects } = await response.json()
  return { total, objects }
}