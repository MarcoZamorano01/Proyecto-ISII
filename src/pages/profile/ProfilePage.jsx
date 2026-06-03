import {
    useEffect,
    useState
}
    from "react";

function ProfilePage() {

    const [user,
        setUser] =
        useState(null);

    useEffect(() => {

        const profile =
            JSON.parse(
                localStorage.getItem(
                    "profile"
                )
            );

        setUser(profile);

    }, []);

    if (!user)
        return null;

    return (

        <div>

            <h1>
                Perfil
            </h1>

            <p>
                Nombre:
                {user.name}
            </p>

            <p>
                Email:
                {user.email}
            </p>

        </div>

    );
}

export default ProfilePage;