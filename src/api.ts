/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
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
    UserResponse: {
      account: components["schemas"]["Account"];
      firstName?: string;
      id: components["schemas"]["Uuid"];
      lastName?: string;
    };
    UsersResponse: {
      account: components["schemas"]["Account"];
      createdAt: components["schemas"]["DateTime"];
      /** @example David */
      firstName?: string;
      id: components["schemas"]["Uuid"];
      /** @example Bowie */
      lastName?: string;
      updatedAt?: components["schemas"]["DateTime"];
    };
  };
}

export interface operations {
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