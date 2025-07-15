export default defineNuxtRouteMiddleware((to, from) => {
  let path = ['/auth/login']

  if (useCookie('userAccount').value) {
    if (path.includes(to.path)) {
      setTimeout(() => {
        return navigateTo('/')
      }, 2000);
    }
  }
  else {
    if (!path.includes(to.path)) {
      return navigateTo('/auth/login')
    }
  }

})