export const atomSessionStorage =
  typeof window === "undefined"
    ? {
        getItem: (key: string) => {
          return null;
        },
        setItem: (key: string, newValue: any) => {},
        removeItem: (key: string) => {},
      }
    : {
        getItem: (key: string) => {
          const storedValue: any = window.sessionStorage.getItem(key);
          if (storedValue === null) {
            console.warn(`no value for key [${key}]`);
            return {};
          }
          return JSON.parse(storedValue);
        },
        setItem: (key: string, newValue: any) => {
          window.sessionStorage.setItem(key, JSON.stringify(newValue));
        },
        removeItem: (key: string) => {
          window.sessionStorage.removeItem(key);
        },
      };
