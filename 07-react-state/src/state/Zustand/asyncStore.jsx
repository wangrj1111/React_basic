// 异步操作
const useStore = create((set) => ({
  count: 0,
  async fetchData() {
    const data = await fetch('https://api.example.com/data');
    const result = await data.json();
    set({ count: result.count });
  },
}));

import { create } from 'zustand';

// 此处假设上面已经定义了create，所以这里不再重复定义

// 中间件
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
    }),
    { name: 'counter-storage' }
  )
);

// 组合多个 store
const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

// 因为文件内容中重复定义了useStore，这里将保留最后一个完整的定义，前面的异步操作和中间件部分只是示例，实际可根据需求调整