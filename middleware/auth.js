export default function ({ store, redirect, route }) {
  // Do not run on server
  if (process.server) {
    return;
  }

  const isAuth = localStorage.getItem("isLoggedIn");

  if (isAuth) {
    navigateTo("/admin");
  }

  if (!isAuth) {
    return navigateTo("/admin/login");
  }
}
