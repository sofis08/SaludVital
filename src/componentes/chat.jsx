import { DeepChat } from "deep-chat-react";

function Chat() {

    return (

        <div>

            <div className="chat-container">

                <DeepChat
                    demo={true}
                    style={{ borderRadius: '10px', width: '1300px', height:'500px' }}


                    textInput={{ placeholder: { text: "Escribe un mensaje" } }} />

            </div>





        </div>

    );

}

export default Chat;