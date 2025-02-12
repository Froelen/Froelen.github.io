function getDeviceType() {
  const userAgent = navigator.userAgent;
if (/Mobi|Android/i.test(userAgent)) {
    return "Mobile";
  } else if (/Tablet|iPad/i.test(userAgent)) {
    return "Tablet";
  } else {
    return "Desktop";
  }
}
console.log(`Device Type: ${getDeviceType()}`);