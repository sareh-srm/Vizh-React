import { create  } from 'zustand'
import PocketBase from 'pocketbase';

// type WithSelectors<S> = S extends { getState: () => infer T }
//   ? S & { use: { [K in keyof T]: () => T[K] } }
//   : never

// const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
//   _store: S,
// ) => {
//   const store = _store as WithSelectors<typeof _store>
//   store.use = {}
//   for (const k of Object.keys(store.getState())) {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     (store.use as any)[k] = () => store((s) => s[k as keyof typeof s])
//   }

//   return store
// }

export interface UserModel {
  avatar: string;
  created: string;
  email: string;
  emailVisibility: boolean;
  id: string;
  name: string;
  updated: string;
  username: string;
  verified: boolean;
}

export interface NFT {
  id: string;
  name: string;
  image_url: string;
  artist_name: string;
  network: string;
  current_bid: number;
  bidder_id: string;
  current_bid_at: string;
  deadline: string;
  created: string;
  updated: string;
}

interface AppState {
  me: null | UserModel;
  pb: PocketBase,
  nfts: NFT[];
  login: (email: string, password: string) => Promise<UserModel>;
  logout: () => Promise<void>;
}

type SetType = (partial: AppState | Partial<AppState> | ((state: AppState) => AppState | Partial<AppState>), replace?: boolean | undefined) => void

const pb = new PocketBase('http://localhost:9292');
pb.autoCancellation(false);

async function login(email: string, password: string, set: SetType) {
  try {
    
  const userData = await pb.collection('users').authWithPassword<UserModel>(email, password);
  console.log(userData)
  // after the above you can also access the auth data from the authStore
  console.log(pb.authStore.isValid);
  console.log(pb.authStore.token);
  console.log('pb.authStore.model', pb.authStore.model);

  set(() => ({
    me: userData.record,
  }))
  return userData.record
  
  } catch (error) {
    console.log(error)
      throw error
  }
}

function logout(set: SetType) {
  if (pb && pb.authStore) {
    pb.authStore.clear();
  }
  set(() => ({
    me: null
  }))
}

const useAppStore = create<AppState>((set) => ({
  me: null,
  pb: pb,
  nfts: [],
  login: async (email: string, password: string) => login(email, password, set),
  logout: async () => logout(set),
}))

export async function autoLogin() {
  const authData = await pb.collection('users').authRefresh<UserModel>();
  // console.log('autoLogin', authData)
  // after the above you can also access the auth data from the authStore
  // console.log(pb.authStore.isValid);
  // console.log(pb.authStore.token);
  console.log('Auto Logged In as ', pb.authStore.model);

  useAppStore.setState(() => ({
    me: authData.record
  }))
  return authData.record
}

autoLogin()


export default useAppStore;
