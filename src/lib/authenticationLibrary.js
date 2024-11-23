//*** Lib */

import { createCookie, getCookie, isCookieExist, removeAllCookies, setCookie } from "../utils/Cookies/CookieHandler";
const authCookieName = 'AuthUser';
const tokenCookieName = 'Token';

export const setAuthProps = (data) => {
    const authProps = {
        cookieName: authCookieName,
        cookieValue: data,
        expirationTime: data.sessionTimeout
    }
    createCookie(authProps);
    setTokenProps(data.token);
}

export const getAuthProps = () => {
    return getCookie(authCookieName);
}

export const isAuthorized = () => {
    return isCookieExist(authCookieName);
}

export const setTokenProps = (data) => {
    const tokenProps = {
        cookieName: tokenCookieName,
        cookieValue: data
    }
    setCookie(tokenProps);
}

export const getTokenProps = () => {
    return getCookie(tokenCookieName);
}

export const signOut = () => {
    removeAllCookies();
    window.location.href = "/login";
}

export const IsAuthorizeUser = (allowUserType) => {
    let cookie = getAuthProps();
    let roleType = Number(cookie?.["roleId"] ?? 0);
    if (allowUserType !== undefined) {
        return allowUserType.find(x => x === roleType)
    }
    return ''
}
