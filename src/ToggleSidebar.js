var toggle = false;

function toggleFunctions() {
    if (toggle) {
        closeSideBar();
    } else {
        openSideBar();
    }
    toggle = !toggle;
}

function openSideBar() {
  document.getElementById('sidebar').style.marginRight = '0';
  document.getElementById('main').style.marginRight = '460px';
}

function closeSideBar() {
  document.getElementById('sidebar').style.marginRight = '-460px';
  document.getElementById('main').style.marginRight = '0';
}

export default toggleFunctions;