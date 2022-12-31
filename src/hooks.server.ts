import type { Handle } from "@sveltejs/kit";

let lastURL = "";
let count = 0;

export const handle = (async ({ event, resolve }) => {
  if (lastURL === event.url.pathname) {
    count++;
  } else {
    count = 0;
    lastURL = event.url.pathname;
  }

  console.log(count, lastURL);

  return await resolve(event);
}) satisfies Handle;
