import create from 'zustand'

 const useStore = create((set) => ({
  selectedAccount: '',
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  setAccount: (account) => set({selectedAccount:account})
}))

export default useStore