
import { sleep } from "@/app/lib/utils";
import { IUser } from "@/app/types/IUser";

type IUpdateUserDTO = Partial<Omit<IUser, 'id'>> & { id: string };

export async function updateUser({ id, name, username, blocked }: IUpdateUserDTO) {
  await sleep(500);
  const response = await fetch(`http://localhost:3000/users/${id}`, {
    method: 'PATCH',
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
