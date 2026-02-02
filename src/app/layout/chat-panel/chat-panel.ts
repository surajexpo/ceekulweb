import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-panel',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-panel.html',
  styleUrl: './chat-panel.scss'
})
export class ChatPanel {
  isOpen = input<boolean>(true);
  protected readonly messageInput = signal('');

  sendMessage(): void {
    const message = this.messageInput();
    if (message.trim()) {
      // Handle message sending logic here
      console.log('Message sent:', message);
      this.messageInput.set('');
    }
  }
}
