import { atomWithStorage } from "jotai/utils";

import { atomSessionStorage } from "@/atoms/atomSessionStorage";
import { IAuthObject } from "@/hooks/AuthService";

export const authAtom = atomWithStorage<IAuthObject | null>(
  "auth",
  null,
  atomSessionStorage
);
