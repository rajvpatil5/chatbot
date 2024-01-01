import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        composerPlaceholder: 'Chat with Eve',
        botConversationDescription: 'Hi! I am Eve, your personal assistant to help you with SciAstra related queries.',
        botId: 'f0ae4eee-6fd7-4725-8f11-a989d4b15759',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: 'f0ae4eee-6fd7-4725-8f11-a989d4b15759',
        webhookId: '5270d88c-47f6-4c3b-9601-fb8416ab9102',
        lazySocket: true,
        themeName: 'prism',
        botName: 'Eve',
        frontendVersion: 'v1',
        theme: 'prism',
        themeColor: '#2563eb',
      });
    };
  }, []);

  return <div id="webchat" />;
};

export default Chatbot;
