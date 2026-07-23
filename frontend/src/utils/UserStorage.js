export const UserStorage = {

    saveUser: (user) => {
        localStorage.setItem("currentUser", JSON.stringify(user));
    },
    
    getUser: () => {
        const storedUser = localStorage.getItem("currentUser");
        return storedUser ? JSON.parse(storedUser) : null;
    },
    
    clearUser: () => {
        localStorage.removeItem("currentUser");
    }
};