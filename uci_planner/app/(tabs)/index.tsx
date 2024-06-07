import React from 'react';
import { Image, StyleSheet, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Card from './Card';

export default function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h4>UCI Planner</h4>
          <Card text="Sample Card Text" />
      </div>
    </DndProvider>
  );
}
