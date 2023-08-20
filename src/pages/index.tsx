import { UserButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const { user, isLoaded, isSignedIn } = useUser();

  console.log(user);

  return (
    <div className="h-full flex items-center justify-center flex-col gap-4">
      <div className="flex gap-2 items-center">
        <UserButton />
        {user?.fullName}
      </div>

      <div>Hello World</div>
    </div>
  );
}
