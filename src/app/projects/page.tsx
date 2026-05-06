import { Header } from "@/components/Layout/Header"
import ProjectsClient from "../../components/sections/ProjectsClient"

export const metadata = {
  title: "Projetos | Geovana Veras",
  description: "Lista completa dos projetos desenvolvidos.",
}

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <ProjectsClient />
    </>
  )
}