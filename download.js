const button = document.getElementById('download-button');
const status = document.getElementById('download-status');
let ready = false;
try {
  const value = (window.CORTELYRA_DOWNLOAD_URL || '').trim();
  if (value) {
    const url = new URL(value);
    if (url.protocol !== 'https:') throw new Error('HTTPS required');
    button.href = url.href;
    ready = true;
  }
} catch {
  status.textContent = '下载地址配置有误，请联系邀请人。';
}
button.setAttribute('aria-disabled', String(!ready));
if (ready) status.textContent = '';
button.addEventListener('click', event => {
  if (!ready) {
    event.preventDefault();
    status.textContent = '安装包尚未发布，请联系邀请人。';
  }
});
document.getElementById('year').textContent = new Date().getFullYear();
