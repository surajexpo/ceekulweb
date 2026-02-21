import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

@Component({
    selector: 'app-personal-layout',
    imports: [CommonModule, RouterOutlet, RouterModule, Navbar, Footer],
    templateUrl: './personal-layout.html',
    styleUrl: './personal-layout.scss'
})
export class PersonalLayout {
    // Navigation items for the Left Sidebar
    readonly navItems = [
        { id: 'potential', label: 'My Ceebrain Potential', route: '/personal/potential' },
        { id: 'projects', label: 'My Projects', route: '/personal/projects' },
        { id: 'neurons', label: 'My Neurons', route: '/personal/neurons' },
        { id: 'kutumb', label: 'My Kutumb', route: '/personal/kutumb' },
        { id: 'future', label: 'My Future', route: '/personal/future' },
    ];

    // Placeholder for widget data or logic
    readonly widgets = [
        { title: 'Support Chat', type: 'chat' },
        // Add more widgets as needed
    ];
}
