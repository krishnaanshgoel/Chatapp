"use client"
import { react } from 'react'
import { useState, useEffect } from 'react';
import { User, Channel as StreamChannel } from 'stream-chat';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';


const Chatforum = ({ clerkUser, slug ,apikey1}) => {
    const apiKey = apikey1;
    const userId = clerkUser.id;
    const userName = clerkUser.name;
    const userToken = clerkUser.token;

    const user = {
        id: userId,
        name: userName,
        image: `https://getstream.io/random_png/?name=${userName}`,
      };
      const [channel, setChannel] = useState();
      const client = useCreateChatClient({
        apiKey,
        tokenOrProvider: userToken,
        userData: user,
      });
    
      useEffect(() => {
        if (!client) return;
    
        const channel = client.channel('messaging', slug, {
          image: 'https://getstream.io/random_png/?name=react',
          name: slug+ " Discussion",
          members: [userId],
        });
    
        setChannel(channel);
      }, [client]);
    
      if (!client) return <div>Setting up client & connection...</div>;
    
      return (
        <Chat client={client}>
          <Channel channel={channel}>
            <Window>
              <ChannelHeader />
              <MessageList />
              <MessageInput />
            </Window>
            <Thread />
          </Channel>
        </Chat>
      )
}
export default Chatforum