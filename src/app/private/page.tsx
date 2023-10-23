// "use client"
// import withAuth from "@/components/auth/withAuth";
import withAuth from "@/components/auth/withAuth";
import UserList from "./userlist";
import Counter from "./count";

const Private = () => {
  // const cookieStore = cookies();
  // const token = cookieStore.get("token");
  // if (!token) {
  //   redirect("/");
  // }

  return (
    <div>
      This is Private route remember
      <div>
        <h1>user list</h1>
        <UserList />
      </div>
      <div>
        <h1>counter using zustand</h1>
        <Counter />
      </div>
    </div>
  );
};

export default Private;
