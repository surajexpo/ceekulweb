import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuItem {
  label: string;
  icon: string;
  route?: string;
  children?: MenuItem[];
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  isCollapsed = input<boolean>(false);
  protected readonly expandedMenus = signal<Set<string>>(new Set());

  protected readonly menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'dashboard',
      route: '/app/dashboard'
    },
    {
      label: 'Analytics',
      icon: 'analytics',
      route: '/app/analytics'
    },
    {
      label: 'Projects',
      icon: 'folder',
      children: [
        { label: 'All Projects', icon: 'list', route: '/app/projects' },
        { label: 'Active', icon: 'check', route: '/app/projects/active' },
        { label: 'Archived', icon: 'archive', route: '/app/projects/archived' }
      ]
    },
    {
      label: 'Reports',
      icon: 'chart',
      route: '/app/reports'
    },
    {
      label: 'Settings',
      icon: 'settings',
      children: [
        { label: 'Profile', icon: 'person', route: '/app/settings/profile' },
        { label: 'Account', icon: 'account', route: '/app/settings/account' },
        { label: 'Security', icon: 'lock', route: '/app/settings/security' }
      ]
    }
  ];

  toggleMenu(label: string): void {
    this.expandedMenus.update(menus => {
      const newMenus = new Set(menus);
      if (newMenus.has(label)) {
        newMenus.delete(label);
      } else {
        newMenus.add(label);
      }
      return newMenus;
    });
  }

  isMenuExpanded(label: string): boolean {
    return this.expandedMenus().has(label);
  }
}
