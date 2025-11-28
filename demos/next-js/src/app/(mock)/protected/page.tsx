import { redirect } from "next/navigation";

import { getUser } from "@/features/auth/helpers/get-user";

export default async function ProtectedPage() {
  const getUserResult = await getUser();

  if (getUserResult.isErr()) {
    if (getUserResult.error.kind === "NOT_AUTHENTICATED") {
      redirect("/");
    } else {
      throw new Error("Something went wrong");
    }
  }

  const user = getUserResult.value;

  return (
    <div className="flex h-full items-center justify-center">
      <p>Welcome, {user.name}</p>
    </div>
  );
}
