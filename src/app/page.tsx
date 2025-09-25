import CardConversation from "@/components/cards/card-conversation/card-conversation";
import InputConversation from "@/components/input-conversarion/input-conversation";

export default function Home() {
  return (
    // <div className="flex-1 flex flex-col items-center justify-center border-2 w-full">
    //   <h1 className="border-1">teste</h1>
    //   <div className="border-1 flex flex-col flex-1 w-full">
    //     <div className="border-1 flex-3 max-h-[70vh] overflow-y-auto">
    //       <p className="h-[50px] border-2">Texto de exemplo</p>
    //       <p className="h-[50px] border-2">Texto de exemplo</p>
    //       <p className="h-[50px] border-2">Texto de exemplo</p>
    //       <p className="h-[50px] border-2">Texto de exemplo</p>
    //       <p className="h-[50px] border-2">Texto de exemplo</p>
    //       <p className="h-[50px] border-2">Texto de exemplo</p>
    //       <p className="h-[50px] border-2">Texto de exemplo</p>
    //       <p className="h-[50px] border-2">Texto de exemplo</p>
    //       <p className="h-[50px] border-2">Texto de exemplo</p>
    //       <p className="h-[50px] border-2">Texto de exemplo</p>
    //       <p className="h-[50px] border-2">Texto de exemplo</p>
    //       <p className="h-[50px] border-2">Texto de exemplo</p>
    //       <p className="h-[50px] border-2">Texto de exemplo</p>
    //       <p className="h-[50px] border-2">Texto de exemplo</p>
    //       <p className="h-[50px] border-2">Texto de exemplo</p>
    //       <p className="h-[50px] border-2">Texto de exemplo</p>
    //       <p className="h-[50px] border-2">Texto de exemplo</p>
    //       <p className="h-[50px] border-2">Texto de exemplo</p>
    //       <p className="h-[50px] border-2">Texto de exemplo</p>
    //       <p className="h-[50px] border-2">Texto de exemplo</p>
    //       <p className="h-[50px] border-2">Texto de exemplo</p>
    //       <p className="h-[50px] border-2">Texto de exemplo</p>
    //       <p className="h-[50px] border-2">Texto de exemplo</p>
    //       <p className="h-[50px] border-2">Texto de exemplo</p>
    //       <p className="h-[50px] border-2">Texto de exemplo</p>
    //       <p className="h-[50px] border-2">Texto de exemplo</p>
    //       <p className="h-[50px] border-2">Texto de exemplo</p>
    //       <p className="h-[50px] border-2">Texto de exemplo</p>
    //       <p className="h-[50px] border-2">Texto de exemplo</p>
    //       <p className="h-[50px] border-2">Texto de exemplo</p>
    //       <p className="h-[50px] border-2">Texto de exemplo</p>
    //     </div>
    //     <div className="border-1 flex-1 h-[100px] bg-amber-200 text-black">
    //       <p>Onde seria o input</p>
    //     </div>
    //   </div>

    // </div>
    <div className="flex flex-col flex-1 items-center p-8 max-h-full w-full max-w-4xl">
      <span className="text-2xl">Envie seu documento, e o GPT irá responder!</span>
      <section className="flex flex-col flex-1 max-h-[80vh] gap-4 w-full">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

        <CardConversation />
        <InputConversation />
      </section>
    </div>
  );
}