import { RpcClient } from "./rpc-client";

export class ExampleAPIClient extends RpcClient {
  async Session_Login(
    params: SessionLoginRpcParams
  ): Promise<SessionLoginRpcResult> {
    return await this.request("Session.Login", params);
  }

  async Session_Logout(params?: undefined): Promise<SessionLogoutRpcResult> {
    return await this.request("Session.Logout", params);
  }

  async Session_KeepAlive(
    params?: undefined
  ): Promise<SessionKeepAliveRpcResult> {
    return await this.request("Session.KeepAlive", params);
  }

  async User_Add(params: UserAddRpcParams): Promise<UserAddRpcResult> {
    return await this.request("User.Add", params);
  }

  async User_Delete(params: UserDeleteRpcParams): Promise<UserDeleteRpcResult> {
    return await this.request("User.Delete", params);
  }

  async User_GetAll(params?: undefined): Promise<UserGetAllRpcResult> {
    return await this.request("User.GetAll", params);
  }
}

export interface SessionLoginRpcParams {
  /**
   * Name of the user to create a session for.
   */
  name: string;
  /**
   * Password of the user to create a session for.
   */
  password: string;
  [k: string]: unknown;
}

export interface SessionLoginRpcResult {
  /**
   * Bearer token of the created session.
   */
  session_token: string;
  /**
   * Validity of the session token in seconds.
   */
  validity?: number;
  [k: string]: unknown;
}

/**
 * Always '0'.
 */
export type SessionLogoutRpcResult = number;

/**
 * Always '0'.
 */
export type SessionKeepAliveRpcResult = number;

export interface UserAddRpcParams {
  /**
   * Name of the user to add.
   */
  name: string | number;
  /**
   * Email of the user to add.
   */
  email: string;
  /**
   * Address of the user to add.
   */
  address?:
    | []
    | [number]
    | [number, string]
    | [number, string, "Street" | "Avenue" | "Boulevard"]
    | [
        number,
        string,
        "Street" | "Avenue" | "Boulevard",
        "NW" | "NE" | "SW" | "SE"
      ];
  /**
   * Password of the user to add.
   */
  password: string;
  [k: string]: unknown;
}

/**
 * Always '0'.
 */
export type UserAddRpcResult = number;

export type UserDeleteRpcParams =
  | {
      /**
       * Name of the user to delete.
       */
      name: string;
      [k: string]: unknown;
    }
  | {
      /**
       * Id of the user to delete.
       */
      id: string;
      [k: string]: unknown;
    };

/**
 * Always '0'.
 */
export type UserDeleteRpcResult = number;

/**
 * List of all existing users.
 */
export type UserGetAllRpcResult = {
  /**
   * Name of the user.
   */
  name: string;
  /**
   * Email of the user.
   */
  email: string;
  /**
   * Address of the user to add.
   */
  address:
    | []
    | [number]
    | [number, string]
    | [number, string, "Street" | "Avenue" | "Boulevard"]
    | [
        number,
        string,
        "Street" | "Avenue" | "Boulevard",
        "NW" | "NE" | "SW" | "SE"
      ];
  [k: string]: unknown;
}[];

export interface Session {
  /**
   * Bearer token of the created session.
   */
  session_token: string;
  /**
   * Validity of the session token in seconds.
   */
  validity?: number;
  [k: string]: unknown;
}
