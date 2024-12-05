import useAuth from "../../hooks/authHooks";

import { handleLogout } from "../../helper";

const LogoutButton = () => {
  return (
    <button
      className="mt-4 border-primary hover:bg-primary hover:text-gray-800"
      onClick={handleLogout}
    >
      Log out
    </button>
  );
};

export default function Profile() {
  const user = useAuth();

  return (
    <div>
      {user ? (
        <>
          <p>User name: {user.displayName}</p>
          <LogoutButton />
        </>
      ) : (
        <p>Please log in to see your profile.</p>
      )}
    </div>
  );
}
