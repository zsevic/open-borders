const isFacebookApp = () => {
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  return ua.indexOf('FBAN') > -1 || ua.indexOf('FBAV') > -1;
};

const isInstagramApp = () => navigator.userAgent.match(/instagram/i);

export const isInAppBrowser = () => isFacebookApp() || isInstagramApp();
