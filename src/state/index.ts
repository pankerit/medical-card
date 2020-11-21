import create from 'zustand'

type State = {
  showProfile: boolean
  setShowProfile: (value: boolean) => void
}

const useGlobalState = create<State>((set) => ({
  showProfile: false,
  setShowProfile: (value) => {
    set({ showProfile: value })
  },
}))

export default useGlobalState
