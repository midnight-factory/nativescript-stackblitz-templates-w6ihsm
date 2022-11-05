import { writable } from 'svelte/store';
import { setString, getString } from 'tns-core-modules/application-settings';

let tmpUser = JSON.stringify({
  token: 'temp',
});
export let user = writable(tmpUser);
// export let user = writable(JSON.parse(getString('user', 'null')));

export function setUser(data) {
  console.log('setting user data');
  user.set(data);

  // app settings update
  setString('user', JSON.stringify(data));
  return;
}
