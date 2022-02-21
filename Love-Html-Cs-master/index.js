window.onload = () => {

    if (window.scrollY > 80) {
      document.querySelector('.loader .loader2').classList.add('active');
    } else {
      document.querySelector('.loader .loader2').classList.remove('active');
    }
  
    fadeOut();
  
  }
  
  function loader() {
    document.querySelector('.loader-container').classList.add('active');
  }
  
  function fadeOut() {
    setTimeout(loader, 700);
  }