import { User } from "../types/user"
import { useState, FormEvent } from "react"
import {Toaster, toast} from "sonner"

import { validate } from "../utils/validate"

export function Form() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [agree, setAgree] = useState(false)
  const [errors, setErrors] = useState<User | null>(null)


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    setErrors(null)


    const data: User = {
      name,
      email,
      agree
    }

    const validateErrors = validate(data)

    console.log(data, validateErrors)

    if(Object.keys(validateErrors).length > 0) {
      toast.error("Algo deu errado")
   
      setErrors(validateErrors)
      return
    }

   
    toast.success("Obrigado por se inscrever!")
    setName("")
    setEmail("")
    setAgree(false)
    
  }


  return(
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col bg-slate-950/45 rounded-lg shadow-lg shadow-black mb-4 w-[500px] p-4 space-y-6">
        <Toaster richColors/>
      <div className="flex flex-col space-y-1 ">
        <label className="text-2xl mb-1">Nome: </label>
        <input 
          className="text-xl  pl-2 py-3 rounded border border-slate-600 outline-none text-black"
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite o seu nome..." />

          {errors ? <p className="text-red-500 italic">{errors.name}</p> : null }
      </div>
      <div className="flex flex-col space-y-1 ">
        <label className="text-2xl mb-1">E-mail: </label>
        <input 
          className="text-xl  pl-2 py-3 rounded border border-slate-600 outline-none text-black"
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite o seu melhor e-mail" />
          {errors ? <p className="text-red-500 italic">{errors.email}</p> : null }
      </div>
     <div className="flex flex-col ">
      <a href="#" className="underline hover:text-purple-300 text-sm">Leia os termos</a>
      <div className="flex items-center gap-2">
        <input 
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          type="checkbox" className="size-5 outline-none"/>
        <label className="text-xl">Clique para aceitar os termos </label>
        {errors ? <p className="text-red-500 italic">{errors.agree}</p> : null }
      </div>
     </div>
     <button className="bg-gradient-to-r bg-cover bg-fixed from-fuchsia-500 to-purple-800 rounded-lg text-xl py-2 hover:from-fuchsia-500/50 hpver:to-purple-800/50 transition-all ">Cadastrar</button>
    </form>
  )
}