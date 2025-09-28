import CardConversation from "@/components/cards/card-conversation/card-conversation";
import InputConversation from "@/components/input-conversarion/input-conversation";

export default function Home() {
  return (
      <section className="containtment flex flex-col flex-1 px-1 pb-3 gap-1 max-h-full w-full">

        <CardConversation />
        <InputConversation />
      </section>
  );
}