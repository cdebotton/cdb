/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/accounts/authorize": {
    post: operations["authorize"];
  };
  "/accounts/revalidate": {
    post: operations["revalidate"];
  };
  "/users": {
    get: operations["get_users"];
  };
  "/users/{id}": {
    get: operations["get_user"];
  };
}

export interface components {
  schemas: {
    Account: {
      /** @example major.tom@gmail.com */
      email: string;
    };
    AuthBody: {
      accessToken: string;
      /** Format: int64 */
      expiresIn: number;
      refreshToken: string;
      /** Format: int64 */
      refreshTokenExpires: number;
      tokenType: string;
    };
    AuthPayload: {
      clientId: string;
      clientSecret: string;
    };
    RevalidatePayload: {
      /** Format: uuid */
      refreshToken: string;
    };
    UserResponse: {
      account: components["schemas"]["Account"];
      firstName?: string;
      /** Format: uuid */
      id: string;
      lastName?: string;
    };
    UsersResponse: {
      account: components["schemas"]["Account"];
      /** Format: date-time */
      createdAt: string;
      /** @example David */
      firstName?: string;
      /**
       * Format: uuid
       * @example Uuid::default()
       */
      id: string;
      /** @example Bowie */
      lastName?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
  };
}

export interface operations {
  authorize: {
    responses: {
      /** Authorization successful */
      200: {
        content: {
          "application/json": components["schemas"]["AuthBody"];
        };
      };
      /** Invalid credentials */
      404: unknown;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["AuthPayload"];
      };
    };
  };
  revalidate: {
    responses: {
      /** Revalidation successful */
      200: {
        content: {
          "application/json": components["schemas"]["AuthBody"];
        };
      };
      /** Invalid refresh token */
      401: unknown;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["RevalidatePayload"];
      };
    };
  };
  get_users: {
    responses: {
      /** List all users */
      200: {
        content: {
          "application/json": components["schemas"]["UsersResponse"][];
        };
      };
    };
  };
  get_user: {
    parameters: {
      path: {
        /** The user's id */
        id: string;
      };
    };
    responses: {
      /** Get a user */
      200: {
        content: {
          "application/json": components["schemas"]["UserResponse"];
        };
      };
      /** User not found */
      404: unknown;
    };
  };
}

export interface external {}