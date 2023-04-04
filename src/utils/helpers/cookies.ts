export const Cookies = {
  getAccessToken: () => getCookieValue('accessToken'),
  removeAccessToken: () => removeCookie('accessToken'),

  getRefreshToken: () => getCookieValue('refreshToken'),
  removeRefreshToken: () => removeCookie('refreshToken'),

  getFrom: () => getCookieValue('from'),
  removeFrom: () => removeCookie('from'),
}

const getCookieValue = (name: string) => {
  const cookieRegex = new RegExp(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`)
  const match = document.cookie.match(cookieRegex)
  return match ? match[2] : null
}

const removeCookie = (name: string) => {
  const cookies = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i]
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1)
    }
    if (cookie.match(name)) {
      const name = cookie.split('=')[0]
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;'
    }
  }
}
