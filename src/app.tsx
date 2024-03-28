import { Form } from "./components/form";

export function App() {

  return (
    <div className="flex  flex-col items-center justify-center mt-20 max-w-[500px] m-auto">
      <h1 className="text-4xl font-semibold">Inscreva-se</h1>
      <p className="text-xl mb-2">Assine nossa newsletter e mantenha-se informado: </p>
      <div>
        <Form/>
      </div>
      <p className="flex text-center">Ao se inscrever, você passará a receber os nossos e-mails com as melhores dicas, novidades e ofertas</p>
    </div>
  )
}


