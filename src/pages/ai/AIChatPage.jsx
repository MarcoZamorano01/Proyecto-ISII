import {
    useState
}
    from "react";

import ReactMarkdown from "react-markdown";

import {
    sendMessage
}
    from "../../api/aiApi";

import "./AIChatPage.css";

function AIChatPage() {

    const [messages, setMessages] =
        useState([
            {
                role: "assistant",
                content:
                    "Hola 👋 Soy tu Orientador Vocacional IA. Puedes preguntarme sobre carreras, habilidades y profesiones."
            }
        ]);

    const [input, setInput] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    const handleSend =
        async () => {

            if (!input.trim())
                return;

            const userMessage = {
                role: "user",
                content: input
            };

            setMessages(prev => [
                ...prev,
                userMessage
            ]);

            setLoading(true);

            try {

                const result =
                    await sendMessage(input);

                setMessages(prev => [
                    ...prev,
                    {
                        role: "assistant",
                        content:
                            result.response
                    }
                ]);

            }
            catch {

                setMessages(prev => [
                    ...prev,
                    {
                        role: "assistant",
                        content:
                            "Ocurrió un error al consultar la IA."
                    }
                ]);
            }

            setInput("");
            setLoading(false);
        };

    return (

        <div className="chat-container">

            <div className="chat-header">
                <h1>🤖 Orientador Vocacional IA</h1>
                <p>Consulta sobre carreras, habilidades y profesiones</p>
            </div>
            <div className="chat-box">

                {
                    messages.map(
                        (m, index) => (

                            <div
                                key={index}
                                className={
                                    m.role === "user"
                                        ?
                                        "message user"
                                        :
                                        "message bot"
                                }
                            >

                                {
                                    m.role === "assistant"
                                        ? (
                                            <ReactMarkdown>
                                                {m.content}
                                            </ReactMarkdown>
                                        )
                                        : (
                                            m.content
                                        )
                                }

                            </div>

                        ))
                }

                {
                    loading &&
                    (
                        <div
                            className="message bot"
                        >
                            🤖 Analizando tu consulta...
                        </div>
                    )
                }

            </div>

            <div className="chat-input">

                <input
                    value={input}
                    placeholder="Escribe tu pregunta..."
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleSend();
                    }}
                />

                <button onClick={handleSend}>
                    Enviar
                </button>

            </div>

        </div>
    );
}

export default AIChatPage;