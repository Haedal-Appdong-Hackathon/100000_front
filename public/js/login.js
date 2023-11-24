const loginCode = new URL(window.location).searchParams.get("code");
const accessTime = 2 * 60;
const refreshTime = 24 * 60 * 7;

if (!!loginCode) {
    $.get(ServerURL + `/api/all/login?code=${loginCode}`).then((res) => {
        setCookie('AccessToken', res.AccessToken, accessTime);
        setCookie('RefreshToken', res.RefreshToken, refreshTime);
        window.location.href = '/';
    }).catch(() => {
        alert("관리자에게 문의하세요.")
        window.location.href = '/';
    })
} else {
    alert('잘못된 접근입니다.');
    window.location.href = '/';
}