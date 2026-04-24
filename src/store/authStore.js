import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,

      login: (email, password) => {
        const users = JSON.parse(localStorage.getItem('rouge_users') || '[]');
        const found = users.find((u) => u.email === email && u.password === password);
        if (found) {
          set({ user: { name: found.name, email: found.email }, isAuthenticated: true });
          return true;
        }
        return false;
      },

      register: (name, email, password) => {
        const users = JSON.parse(localStorage.getItem('rouge_users') || '[]');
        if (users.find((u) => u.email === email)) return false;
        users.push({ name, email, password });
        localStorage.setItem('rouge_users', JSON.stringify(users));
        set({ user: { name, email }, isAuthenticated: true });
        return true;
      },

      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    { name: 'rouge-auth' }
  )
);

