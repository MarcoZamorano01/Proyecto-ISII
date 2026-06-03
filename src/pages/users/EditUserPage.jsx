import {
  useEffect,
  useState
} from "react";

import {
  useParams
} from "react-router-dom";

import {
  getUserById,
  updateUser
}
from "../../api/usersApi";

function EditUserPage() {

  const {
    id
  } = useParams();

  const [user,
    setUser] =
    useState(null);

  useEffect(() => {

    load();

  }, []);

  const load =
  async () => {

    const data =
      await getUserById(id);

    setUser(data);
  };

  const save =
  async () => {

    await updateUser(
      id,
      user
    );

    alert(
      "Actualizado"
    );
  };

  if(!user)
    return null;

  return (

    <div>

      <input
        value={user.name}
      />

      <button
        onClick={save}
      >

        Guardar

      </button>

    </div>
  );
}

export default EditUserPage;