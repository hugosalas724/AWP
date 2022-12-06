self.addEventListener('install', e =>{
  const cacheProm = caches.open('cache-v1')
      .then(cache => {
          return cache.addAll([
              'index.html',
              'Styles.css',
              'Img/fondo.jpg',
              'main.js',
              'https://fonts.googleapis.com/css2?family=Inter+Tight&display=swap',
              'manifest.json'
              
          ])
      });
  e.waitUntil(cacheProm);
});

self.addEventListener('fetch', e => { 

  const respuesta = caches.match( e.request)
  .then ( res => {
      if ( res ) return res;

      console.log('No existe', e.request.url);
      return fetch( e.request ).then ( newResp => {
          caches.open('cache-v1')
              .then( cache => {
                  cache.put( e.request, newResp);
              }

          )
          return newResp.clone;
      });
  });
   e.respondWith(respuesta);
});