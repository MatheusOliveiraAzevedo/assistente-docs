import CardConversation from "@/components/cards/card-conversation/card-conversation";
import InputConversation from "@/components/input-conversarion/input-conversation";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center p-4 sm:p-8 max-h-full w-full max-w-4xl">
      <span className="text-lg text-center">Envie seu documento, e o Assistente irá responder!</span>
      <section className="flex flex-col flex-1 max-h-[80vh] gap-4 w-full">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

        <CardConversation />
        <InputConversation />
      </section>
    </div>
  );
}