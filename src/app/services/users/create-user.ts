
import { sleep } from "@/app/lib/utils";
import { IUser } from "@/app/types/IUser";

type ICreateUserDTO = Omit<IUser, 'id'>;

export async function createUser({ name, username, blocked }: ICreateUserDTO) {
  await sleep();
  const response = await fetch('http://localhost:30002/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      username,
      blocked,
    }),
  });
  const body = await response.json();

  return body as IUser;
}
