interface Message {
  id: string;
  content: string;
  priority: 'normal' | 'important' | 'extreme';
  timestamp: Date;
  sender: User;
  attachments?: Attachment[];
}

class MessagingService {
  sendMessage = async (message: Message) => {
    // Use Firebase Cloud Messaging (FCM) for push notifications
    if (message.priority === 'extreme') {
      // Configure critical alert settings
      return await FCM.send({
        ...message,
        android: {
          priority: 'high',
          sound: 'critical_alert.mp3',
          channelId: 'emergency',
        },
        ios: {
          critical: true,
          sound: 'critical_alert.wav',
        }
      });
    }
  }
} 