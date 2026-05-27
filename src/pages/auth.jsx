import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useUser } from "../context/UserContext"

export default function Auth() {
  const [name, setName] = useState("")
  const { login } = useUser()
  const navigate = useNavigate()

  const create = () => {
    if (!name) return
    login(name)
    navigate("/profile")
  }

  return (
    <div style={{ color: "white", padding: 40 }}>
      <h1>Criar Conta</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome"
      />

      <button onClick={create}>
        Criar
      </button>
    </div>
  )
}