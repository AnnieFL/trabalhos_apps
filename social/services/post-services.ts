import { API_LIMIT } from '@/constants/api-constants';
import { temp_users, UserReturn } from './user-services';

export type PostReturn = {
  id: number,
  title: string,
  content: string,
  file?: string,
  userId: number,
  user: UserReturn
}

const temp_posts = [
  { id: 1, title: "Primeiro Post", content: "Conteúdo do primeiro post", file: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D", userId: 1 },
  { id: 2, title: "React Básico", content: "Introdução ao React", file: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D", userId: 2 },
  { id: 3, title: "TypeScript Tips", content: "Dicas úteis de TypeScript", file: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D", userId: 3 },
  { id: 4, title: "Context API", content: "Gerenciamento de estado com Context", file: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D", userId: 4 },
  { id: 5, title: "Hooks Avançados", content: "Uso avançado de hooks", file: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D", userId: 5 },
  { id: 6, title: "Node.js", content: "Criando APIs com Node.js", file: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D", userId: 6 },
  { id: 7, title: "Express Guide", content: "Guia rápido de Express", file: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D", userId: 7 },
  { id: 8, title: "Banco de Dados", content: "Modelagem de dados", file: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D", userId: 8 },
  { id: 9, title: "Autenticação", content: "JWT e autenticação", file: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D", userId: 9 },
  { id: 10, title: "Segurança Web", content: "Boas práticas de segurança", file: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D", userId: 10 },
  { id: 11, title: "Frontend Performance", content: "Otimização de performance", file: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D", userId: 11 },
  { id: 12, title: "CSS Moderno", content: "Flexbox e Grid", file: "css-https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D", userId: 12 },
  { id: 13, title: "Acessibilidade", content: "Web acessível", file: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D", userId: 13 },
  { id: 14, title: "Testes", content: "Testes automatizados", file: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D", userId: 14 },
  { id: 15, title: "Deploy", content: "Deploy de aplicações", file: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D", userId: 15 },
  { id: 16, title: "Arquitetura", content: "Boas práticas de arquitetura", file: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D", userId: 1 },
  { id: 17, title: "Clean Code", content: "Código limpo na prática", file: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D", userId: 2 },
  { id: 18, title: "Design Patterns", content: "Padrões de projeto", file: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D", userId: 3 },
  { id: 19, title: "Microservices", content: "Introdução a microsserviços", file: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D", userId: 4 },
  { id: 20, title: "GraphQL", content: "API com GraphQL", file: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D", userId: 5 },
  { id: 21, title: "REST APIs", content: "Boas práticas REST", file: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D", userId: 6 },
  { id: 22, title: "DevOps", content: "Pipeline CI/CD", file: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D", userId: 7 },
  { id: 23, title: "Docker", content: "Containers com Docker", file: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D", userId: 8 },
  { id: 24, title: "Kubernetes", content: "Orquestração de containers", file: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D", userId: 9 },
  { id: 25, title: "Monitoramento", content: "Logs e métricas", file: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D", userId: 10 }
];

const listPost = async (limit: number = API_LIMIT, page: number = 0, authCode: string = ''):Promise<PostReturn[]> => {
  // return await GetFetch(`${urls.POST.BASE}?limit=${limit}&page=${page}`, authCode);

  return temp_posts.filter((p) => p.id <= limit * (page+1) && p.id > limit * page).map((p) => ({...p, user: temp_users[p.userId-1]}))
}

const getPost = async (postId:number, authCode: string = ''):Promise<PostReturn|null> => {
  // const postData await GetFetch(`${urls.POST.BASE}/${postId}`, authCode);

  return temp_posts[postId] ? {...temp_posts[postId], user: temp_users[temp_posts[postId].userId-1]} : null
}

const createPost = async (post:FormData, authCode: string = ''):Promise<PostReturn|null> => {  
  // return await PostFetch(`${urls.POST.BASE}`, post, authCode);

  return {...temp_posts[1], id: temp_posts.length, user: temp_users[temp_posts[1].userId-1]}
}

const deletePost = async (postId: number, authCode: string = ''):Promise<boolean> => {
  // return await DeleteFetch(`${urls.POST.BASE}/${postId}`, authCode);

  return true
}

export const postApiDefault = {
  listPost,
  getPost,
  createPost,
  deletePost
};