const modal_window = document.getElementById('modal_window');
const register_tab = document.getElementById('modal-register');
const login_tab = document.getElementById('modal-login');

function open_modal() {
    modal_window.style.display = 'flex';
}

function close_modal() {
    modal_window.style.display = 'none';
}

function open_register_tab() {
    login_tab.style.display = 'none';
    register_tab.style.display = 'block';
    document.getElementById('modal-up').style.borderBottomColor = '#EB5757';
    document.getElementById('modal-in').style.borderBottomColor = '#999';
}

function open_login_tab() {
    register_tab.style.display = 'none';
    login_tab.style.display = 'block';
    document.getElementById('modal-in').style.borderBottomColor = '#EB5757';
    document.getElementById('modal-up').style.borderBottomColor = '#999';
}

function makeAllWithoutBorder() {
    document.getElementById('light').style.borderColor = "#111";
    document.getElementById('base').style.borderColor = "#111";
    document.getElementById('pro').style.borderColor = "#111";
}

function choose(id) {
    makeAllWithoutBorder();
    document.getElementById(id).style.borderColor = "#EB5757"
}