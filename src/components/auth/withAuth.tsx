// "use client"
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function withAuth(Component: any) {
  return (props: any) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token");
    if (!token) {
      redirect("/");
    }

    return <Component {...props} />;
  };
}
