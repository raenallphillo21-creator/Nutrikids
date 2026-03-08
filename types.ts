// Add missing React import to resolve namespace error in ReactNode
import React from 'react';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isError?: boolean;
}

export interface PreventionItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  detail?: string;
}

export interface ImpactItem {
  title: string;
  description: string;
  category: 'physical' | 'intelligence';
}
