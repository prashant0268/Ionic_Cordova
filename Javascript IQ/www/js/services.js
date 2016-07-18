angular.module('starter.services', [])
.service('cordovaData', function(){
  this.cordovaList = function(){
    return [
      { title: 'Battery', id: 1 },
      { title: 'Camera', id: 2 },
      { title: 'Contacts', id: 3 },
      { title: 'Device', id: 4 },
      { title: 'Device Orientation', id: 5 },
      { title: 'File', id: 7 },
      { title: 'File Transfer', id: 8 },
      { title: 'Geolocation', id: 9 },
      { title: 'Globalization', id: 10 },
      { title: 'InAppBrowser', id: 11 },
      { title: 'Media', id: 12 },
      { title: 'Media Capture', id: 13 },
      { title: 'Network Information', id: 14 }
    ];
  }
  this.ionicList = function(){
    return [
      { title: 'Action Sheet', id: 1 },
      { title: 'Backdrop', id: 2 },
      { title: 'Content', id: 3 },
      { title: 'Form Inputs', id: 4 },
      { title: 'Gestures and Events', id: 5 },
      { title: 'Keyboard', id: 6 },
      { title: 'Lists', id: 7 },
      { title: 'Loading', id: 8 },
      { title: 'Modal', id: 9 },
      { title: 'Platform', id: 10 },
      { title: 'Popover', id: 11 },
      { title: 'Popup', id: 12 },
      { title: 'Scroll', id: 13 },
      { title: 'Slide Box', id: 14 },
      { title: 'Spinner', id: 15 },
      { title: 'Tabs', id: 16 }
    ];
  }
})
