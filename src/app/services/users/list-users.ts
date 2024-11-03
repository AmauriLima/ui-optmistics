import { sleep } from "@/app/lib/utils";
import { IUser } from "@/app/types/IUser";

export async function listUsers() {
  await sleep();
  const response = await fetch('http://localhost:3000/users');
  const body = await response.json();

  return body as IUser[];
}
