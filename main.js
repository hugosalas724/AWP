if('serviceWorker' in navigator){
    console.log('Puedes usar los service worker en tu navegador');
    navigator.serviceWorker.register('./sw.js')
    .then(res=>console.log('serviceWorker cargado correctamente', res))
    .catch(err=>console.log('serviceWorker no se ha podido cargar', err))
}else{
    console.log('No se pueden usar los servicios de serviceWorker en tu navegador');
}