import { CaretLeft, CaretRight, Person, Users } from "phosphor-react";
import { useState } from "react";
import ChatComment from "./ChatComment";

export default function LiveChat() {
    const [chatHidden, setChatHidden] = useState(false)

    return (
        <div
            className="transition"
            style={{ marginRight: chatHidden ? "0" : "21.25rem" }}>
            <div
                className="h-screen fixed outline outline-1 pt-[3.25rem] top-0 right-0 transition"
                style={{ width: chatHidden ? "0" : "21.25rem" }}
            >
                <div className="relative h-full">
                    {chatHidden ? (
                        <div
                            className="absolute left-0 top-0 pt-4 -translate-x-10">
                            <button
                                className="text-text hover:bg-white/20 p-1 rounded"
                                onClick={() => setChatHidden(false)}>
                                <CaretLeft weight="bold" size={20} />
                            </button>
                        </div>
                    ) : (
                        <div className="bg-bg h-full outline outline-1 outline-gray">


                            <header
                                className="text-text flex justify-between items-center p-[0.625rem] outline outline-1 outline-gray"
                            >
                                <button
                                    className="text-text hover:bg-white/20 p-1 rounded"
                                    onClick={() => setChatHidden(true)}
                                >
                                    <CaretRight weight="bold" size={20} />
                                </button>
                                <h4 className="uppercase text-sm font-semibold">Stream Chat</h4>
                                <button>
                                    <Users weight="fill" size={20} /></button>
                            </header>
                            <div className="p-[0.625rem]">
                                <ChatComment userName="h3nrey" comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laborum recusandae veritatis dolor sunt earum magnam vero? Quas beatae, dignissimos iusto voluptatibus suscipit temporibus nesciunt ab, nemo doloremque, non consectetur!" />
                                <ChatComment userName="h3nrey" comment="oi vito tudo bom, hahaha" />
                                <ChatComment userName="h3nrey" comment="oi vito tudo bom, hahaha" />
                            </div>

                        </div>
                    )}
                </div>

            </div>
            {/* <p></p> */}
        </div>
    )
}