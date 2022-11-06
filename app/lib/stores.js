import { writable } from 'svelte/store';
import { setString, getString } from 'tns-core-modules/application-settings';

let tmpUser = JSON.stringify({
  token: 'temp',
  channel: {
    id: '12826',
    display_name: 'Twitch',
    thumbnail_url:
      'https://static-cdn.jtvnw.net/jtv_user_pictures/26e28203-495c-4bb3-9c6e-c0f4c2a87a9d-profile_image-300x300.png',
  },
});
export let user = writable(tmpUser);
export let settings = writable(
  JSON.parse(
    getString(
      'settings',
      JSON.stringify({
        search: {
          channel: {
            id: '12826',
            display_name: 'Twitch',
            thumbnail_url:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/26e28203-495c-4bb3-9c6e-c0f4c2a87a9d-profile_image-300x300.png',
          },
          game: null,
        },
      })
    )
  )
);
// export let user = writable(JSON.parse(getString('user', 'null')));

export function setUser(data) {
  console.log('setting user data');
  user.set(data);

  // app settings update
  setString('user', JSON.stringify(data));
  return;
}
