import axios from "axios";
import { useAtom } from "jotai";
import { RESET } from "jotai/utils";
import { jwtDecode, JwtPayload } from "jwt-decode";
import Router from "next/router";
import { useCallback, useEffect } from "react";

import { authAtom } from "@/atoms/authAtom";
import { BASE_URL, httpClient } from "@/lib/httpClient";

export interface LoginFormPayload {
  id: string;
  password: string;
}

// data returned from server
export interface AuthPayload extends JwtPayload {
  id: string;
  role: string;
  number: string;
  name?: string;
}

export interface IAuthObject {
  user: AuthPayload;
  token: string;
}

export const isValidAuth = (
  obj: IAuthObject | null | undefined
): obj is IAuthObject => {
  if (obj === undefined || obj === null || obj.user === undefined) return false;
  return true;
};

// useAuth() will
// - return `null` or valid `IAuthObject`
// - sync `sessionStorage.auth` with current `IAuthObject`
// - enabled is for waiting for slug to be ready
// - redirect to `redirectTo` if `!isValidAuth(auth)`
// redirect logic from https://github.com/vercel/next.js/tree/canary/examples/with-iron-session
export function useAuth({
  redirectTo = "",
  redirectIfFound = false,
  enabled = true,
} = {}) {
  const [auth, setAuth] = useAtom(authAtom);

  useEffect(() => {
    // console.log("[useAuth] check redirect");
    // console.log(
    //   "!!redirectTo redirectIfFound",
    //   !!redirectTo,
    //   redirectTo,
    //   redirectIfFound
    // );
    // console.log("isValidAuth", isValidAuth(auth), auth);

    // if no redirect needed, just return (example: already on /dashboard)
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
    if (!enabled || !redirectTo) return;

    const _auth = isValidAuth(auth) ? auth : null;
    if (!_auth) console.log("[useAuth] not logged in");
    if (
      // If redirectTo is set, redirect if the user was not found.
      !_auth ||
      // If redirectIfFound is also set, redirect if the user was found
      redirectIfFound
    ) {
      Router.push(redirectTo);
    }
    if (auth)
      httpClient.defaults.headers.common["Authorization"] = `JWT ${auth.token}`;
  }, [auth, redirectIfFound, redirectTo]);

  const _auth = isValidAuth(auth) ? auth : null;
  const logout = useCallback(async () => {
    console.log("logout()", _auth);
    if (_auth) {
      await axios.post(`${BASE_URL}/logout`);
    }
    setAuth(RESET);
    if (redirectTo) Router.push(redirectTo);
    // httpClient.defaults.headers.common["Authorization"] = "";
  }, [setAuth]);

  const login = useCallback(
    (payload: LoginFormPayload) => {
      logout();
      // use axios directly instead of the httpClient instance
      return axios
        .post(`${BASE_URL}/login`, payload, {
          headers: {
            "Content-Type": "application/json",
            // "Access-Control-Request-Headers": ["Content-Type", "Set-Cookie"],
          },
        })
        .then(({ data }) => {
          // console.log(data);
          const auth: IAuthObject = {
            user: jwtDecode<AuthPayload>(data.token),
            token: data.token,
          };

          setAuth(auth);
          httpClient.defaults.headers.common[
            "Authorization"
          ] = `JWT ${auth.token}`;

          return auth;
        });
      // .catch((err) => {
      //   console.log("login error", err);
      //   if (err.response) {
      //     // The client was given an error response (5xx, 4xx)
      //     console.error("resp", err);
      //   } else if (err.request) {
      //     // The client never received a response, and the request was never left
      //     console.error("req", err);
      //   } else {
      //     // Anything else
      //     console.error("error", err);
      //   }
      //   return Promise.reject(err);
      // });
    },
    [setAuth, logout]
  );

  return { auth: _auth, login, logout };
}
