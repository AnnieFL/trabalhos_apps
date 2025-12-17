import { API_LIMIT } from '@/constants/api-constants';

type UserCreate = {
  name: string,
  email: string,
  password: string
}

type UserLogin = {
  email: string,
  password: string
}

export type UserReturn = {
  id: number,
  name: string,
  email: string,
  token?: string
}

type AuthReturn = {
  jwt: string,
  
} & UserReturn

export const temp_users = [
  { id: 1, name: "Ana Silva", email: "ana.silva@email.com" },
  { id: 2, name: "Bruno Costa", email: "bruno.costa@email.com" },
  { id: 3, name: "Carla Mendes", email: "carla.mendes@email.com" },
  { id: 4, name: "Daniel Rocha", email: "daniel.rocha@email.com" },
  { id: 5, name: "Eduarda Lima", email: "eduarda.lima@email.com" },
  { id: 6, name: "Felipe Alves", email: "felipe.alves@email.com" },
  { id: 7, name: "Gabriela Pires", email: "gabriela.pires@email.com" },
  { id: 8, name: "Henrique Souza", email: "henrique.souza@email.com" },
  { id: 9, name: "Isabela Torres", email: "isabela.torres@email.com" },
  { id: 10, name: "João Ribeiro", email: "joao.ribeiro@email.com" },
  { id: 11, name: "Karina Nogueira", email: "karina.nogueira@email.com" },
  { id: 12, name: "Lucas Barros", email: "lucas.barros@email.com" },
  { id: 13, name: "Mariana Farias", email: "mariana.farias@email.com" },
  { id: 14, name: "Nathan Azevedo", email: "nathan.azevedo@email.com" },
  { id: 15, name: "Olivia Cunha", email: "olivia.cunha@email.com" }
];

const listUser = async (limit: number = API_LIMIT, page: number = 0, authCode: string = ''):Promise<UserReturn[]> => {
  // return await GetFetch(`${urls.USER.BASE}?limit=${limit}&page=${page}`, authCode);

  return temp_users.filter((u) => u.id <= limit * (page+1) && u.id > limit * page)
}

const getUser = async (userId:number, authCode: string = ''):Promise<UserReturn|null> => {
  // return await GetFetch(`${urls.USER.BASE}/${userId}`, authCode);

  return temp_users[userId] || null
}

const createUser = async (user:UserCreate, authCode: string = ''):Promise<AuthReturn|null> => {
  // const userLogin:UserLogin = {password: user.password, email: user.email};
  
  // await PostFetch(`${urls.USER.BASE}`, user, authCode);

  // return authUser(userLogin, authCode);
  
  return {jwt: 'abc', id: temp_users.length+1, ...user}
}

const authUser = async (user: UserLogin, authCode: string = ''):Promise<AuthReturn|null> => {
  // const userAuth = await PostFetch(`${urls.USER.AUTH}`, user, authCode);

  // const token = userAuth.jwt; 

  // if (!token) {
  //   return null
  // }

  // AsyncStorage.setItem("token", token)
  
  // const userReturn = {
  //   ...userAuth.user,
  //   jwt: token
  // }
  // return userReturn

  return {...temp_users[1], jwt: 'abc'};
  
}

export const userApiDefault = {
  listUser,
  getUser,
  createUser,
  authUser
};