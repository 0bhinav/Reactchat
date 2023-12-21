import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    return (
        <div className="background">
            <div className='chat-wrapper'>
                <PrettyChatWindow
                    projectId={"f235cfc6-5e1f-4b33-b519-37bfb63510d9"}
                    username={props.user.username}
                    secret={props.user.secret}
                />
            </div>
        </div>
    );
}

export default ChatsPage