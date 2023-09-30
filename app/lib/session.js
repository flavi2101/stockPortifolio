import { getSession } from "next-auth/react";

export default async function session() {
  let session = await getSession();
  return session;
}
