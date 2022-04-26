import endpoints from './endpoints'

export const getHello = async (id: string) => {
  const response = await fetch(endpoints.hello, {
    body: JSON.stringify({
      id
    }),
    method: 'POST',
    mode: 'cors'
  })
  if (response.status === 200) {
    return await response.json()
  } else {
    throw new Error(await response.text())
  }
}


export default {
  getHello
}
