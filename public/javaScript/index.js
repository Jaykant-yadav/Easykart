document.getElementById('openRegister').addEventListener('click', function () {
    const registerTab = new bootstrap.Tab(document.querySelector('#register-tab'));
    registerTab.show();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // optional scroll to top
  });

  document.getElementById('openLogin').addEventListener('click', function () {
    const loginTab = new bootstrap.Tab(document.querySelector('#login-tab'));
    loginTab.show();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // optional scroll to top
  });

  