import { writable } from 'svelte/store';
// import { setString, getString, clear } from "tns-core-modules/application-settings"

// clear()
// JSON.parse(getString('user', 'null'))
export let user = writable(null);

export function setUser(data) {
  console.log('setting user data');
  user.set(data);

  // app settings update
  // setString('user', data)

  return;
}
