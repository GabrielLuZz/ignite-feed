import { PostType } from "../types/post";

export const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/GabrielLuZz.png",
      name: "Gabriel Luz",
      role: "Web Developer"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"}
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Pjota94.png",
      name: "Paulo Júnior",
      role: "Fullstack Developer"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"}
    ],
    publishedAt: new Date('2022-05-10 17:29:00')
  }
]