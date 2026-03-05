export const encodeString = (str: string) => {
  return Buffer.from(
    `${crypto.randomUUID()}&?${str}&?${crypto.randomUUID()}`,
    'utf-8',
  ).toString('base64')
}

export const decodeString = (str: string) => {
  let res: string | null = null
  try {
    res = Buffer.from(str, 'base64')
      .toString('utf-8')
      .split('&?')
      .slice(1, -1)
      .join('')
  } catch (error) {
    res = null
  }

  return res
}
