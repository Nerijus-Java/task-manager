export const UserStorage = {
    
    saveUser: (user) => {
        localStorage.setItem("currentUser", JSON.stringify(user));
    },
    
    getUser: () => {
        const storedUser = localStorage.getItem("currentUser");
        
        if (!storedUser) return null;

        try {
            return JSON.parse(storedUser);
        } catch (error) {
            console.error("Corrupted user data found in localStorage. Wiping it.");
            localStorage.removeItem("currentUser");
            return null;
        }
    },
    
    clearUser: () => {
        localStorage.removeItem("currentUser");
    }
};