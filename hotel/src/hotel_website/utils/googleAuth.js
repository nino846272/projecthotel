import { GoogleAuthProvider, signInWithPopup } from "../firebase/firebase_config";
import { auth } from "../firebase/firebase_config";

export const handleGoogleLogin = async (checkUser) => {
    const provider = new GoogleAuthProvider();
    try {
        let res = await signInWithPopup(auth, provider);
        await checkUser(res.user.uid, res.user);
    } catch (error) {
        console.error("Ошибка авторизации через Google:", error);
        alert("Ошибка при входе через Google");
    }
};

export const checkUser = async (uid, userDetail, navigate) => {
    try {
        const response = await fetch("https://67cc190f3395520e6af72555.mockapi.io/users");
        const users = await response.json();
        const user = users.find(u => u.uid === uid);

        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/profile");
        } else {
            await Register(userDetail, navigate);
        }
    } catch (error) {
        console.error("Ошибка сети:", error);
        alert("Ошибка сети или API недоступен");
    }
};

export const Register = async (userDetail, navigate) => {
    const response = await fetch("https://67cc190f3395520e6af72555.mockapi.io/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: userDetail.email,
            password: userDetail.password || "",
            uid: userDetail.uid,
            name: userDetail.displayName,
            avatar: userDetail.photoURL,
        }),
    });

    if (response.ok) {
        alert("Регистрация успешна!");
        navigate("/login");
    } else {
        alert("Ошибка при регистрации. Пожалуйста, попробуйте снова.");
    }
};
