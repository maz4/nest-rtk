"use client";
import { useUserControllerGetUsersQuery } from "web/store/api/gen/users.gen";

const TestFetchData: React.FC<any> = ({ children }) => {
  const userStuff = useUserControllerGetUsersQuery();
  console.log("userStuff", userStuff);

  return (
    <div>
      <pre>{JSON.stringify(userStuff, null, 2)}</pre>
    </div>
  );
};

export default TestFetchData;
