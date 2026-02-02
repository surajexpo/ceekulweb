import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../navbar/navbar';
import { Sidebar } from '../sidebar/sidebar';
import { ChatPanel } from '../chat-panel/chat-panel';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-main-layout',
  imports: [CommonModule, RouterOutlet, Navbar, Sidebar, ChatPanel, Footer],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayout {
  protected readonly isSidebarCollapsed = signal(false);
  protected readonly isChatPanelOpen = signal(true);

  toggleSidebar(): void {
    this.isSidebarCollapsed.update(value => !value);
  }

  toggleChatPanel(): void {
    this.isChatPanelOpen.update(value => !value);
  }
}
