import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { MessageList, MessageInput, PrioritySelector } from '../components';

export const CommunicationScreen = () => {
  const [priority, setPriority] = useState('normal');

  const handleSend = async (message: string) => {
    const messagingService = new MessagingService();
    await messagingService.sendMessage({
      content: message,
      priority,
      timestamp: new Date(),
      sender: currentUser,
    });
  };

  return (
    <View style={styles.container}>
      <MessageList />
      <PrioritySelector 
        value={priority} 
        onChange={setPriority} 
      />
      <MessageInput onSend={handleSend} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
}); 