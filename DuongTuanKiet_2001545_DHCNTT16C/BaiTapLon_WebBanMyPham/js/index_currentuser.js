let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

if (currentUser) {
    btnDangnhap.style.display = 'none';
    btnProfile.style.display = 'list-item';
    btnLogout.style.display = 'block';
    let cartNotice = document.querySelector('.cart-notice');
    cartNotice.innerText = currentUser.cart.length;
}

function logout() {
    if (currentUser) {
        sessionStorage.removeItem('currentUser');
        btnLogout.style.display = 'none';
    }
}

