// HeadroomJS initialization for sticky navigation
import Headroom from 'headroom.js';

document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('#navigation');
  
  if (header) {
    const headroom = new Headroom(header, {
      offset: 100,
      tolerance: {
        up: 10,
        down: 10
      },
      classes: {
        initial: "headroom",
        pinned: "headroom--pinned",
        unpinned: "headroom--unpinned",
        top: "headroom--top",
        notTop: "headroom--not-top",
        bottom: "headroom--bottom",
        notBottom: "headroom--not-bottom",
        frozen: "headroom--frozen"
      }
    });
    
    headroom.init();
  }
});