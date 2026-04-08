import ChatIAComponent from "@/src/components/sections/shared/hero/ChatIAComponent";
import { useTranslations } from "next-intl";

export default function NuevaVistaChat() {
  const t = useTranslations("chat");

  return (
    <div className="bg-bg-main w-full py-12">
      <div className="container mx-auto px-4 md:px-0">
        <ChatIAComponent data={t.raw("chatIA")} />
      </div>
    </div>
  );
}