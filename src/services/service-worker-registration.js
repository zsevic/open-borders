export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker/main.js').then(() => {
        console.log('Service worker is registered!');
      });
    });
  }
};
