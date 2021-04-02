import client from "./apolloClient";

const readFromCache = (query: any, props: any): object | null => {
  let cache: any;
  try {
    // Read from apollo cache
    cache = client.readQuery({
      query,
      ...props,
    });
    return {
      read: (): object => {
        return cache;
      },
    };
  } catch (error) {
    cache = null;
  }

  return cache;
};

export const wrapPromise = (promise: Promise<any>): any => {
  let status = "pending";
  let response: any;

  const suspender = promise
    .catch((err: any) => {
      document.cookie = "token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
      window.location.href = "/login"
    })
    .then(
      (res: any) => {
        status = "success";
        response = res;
      },
      (err: any) => {
        status = "error";
        response = err;
      }
    );
  const read = (): any => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw response;
      default:
        return response;
    }
  };

  return { read };
};

export const createResource = (query: any, props?: any): any => {
  const cache = readFromCache(query, props);
  if (cache) return cache;

  const promise = client.query({ query, ...props }).then((res) => res.data);
  return wrapPromise(promise);
};
