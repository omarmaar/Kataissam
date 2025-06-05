import { Component, signal } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"

interface UserProfile {
  name: string
  email: string
  bio: string
}

@Component({
  selector: "app-profile",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="profile-container">
      <h1>User Profile</h1>
      <p class="subtitle">This component is lazy-loaded for better performance</p>
      
      <div class="profile-card">
        <div class="profile-header">
          <div class="avatar">{{ userProfile().name.charAt(0) }}</div>
          <h2>{{ userProfile().name }}</h2>
        </div>
        
        <div class="profile-details">
          <div class="detail-item">
            <label>Email:</label>
            <p>{{ userProfile().email }}</p>
          </div>
          
          <div class="detail-item">
            <label>Bio:</label>
            <p>{{ userProfile().bio }}</p>
          </div>
        </div>
        
        <div class="edit-section">
          <h3>Edit Profile</h3>
          
          <div class="form-group">
            <label for="name">Name</label>
            <input 
              type="text" 
              id="name" 
              [ngModel]="userProfile().name" 
              (ngModelChange)="updateProfile('name', $event)"
            />
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              [ngModel]="userProfile().email" 
              (ngModelChange)="updateProfile('email', $event)"
            />
          </div>
          
          <div class="form-group">
            <label for="bio">Bio</label>
            <textarea 
              id="bio" 
              rows="4" 
              [ngModel]="userProfile().bio" 
              (ngModelChange)="updateProfile('bio', $event)"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
    .profile-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    
    h1 {
      color: #4285f4;
      margin-bottom: 10px;
    }
    
    .subtitle {
      color: #666;
      margin-bottom: 30px;
      font-style: italic;
    }
    
    .profile-card {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      overflow: hidden;
    }
    
    .profile-header {
      background-color: #4285f4;
      color: white;
      padding: 30px 20px;
      text-align: center;
    }
    
    .avatar {
      width: 80px;
      height: 80px;
      background-color: white;
      color: #4285f4;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 36px;
      font-weight: bold;
      margin: 0 auto 15px;
    }
    
    .profile-details {
      padding: 20px;
      border-bottom: 1px solid #eee;
    }
    
    .detail-item {
      margin-bottom: 15px;
    }
    
    .detail-item label {
      font-weight: bold;
      color: #666;
      display: block;
      margin-bottom: 5px;
    }
    
    .edit-section {
      padding: 20px;
    }
    
    .edit-section h3 {
      margin-bottom: 20px;
      color: #5f6368;
    }
    
    .form-group {
      margin-bottom: 15px;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 5px;
      color: #666;
    }
    
    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 16px;
    }
    
    .form-group textarea {
      resize: vertical;
    }
  `,
  ],
})
export class ProfileComponent {
  // Using signal for reactive state management
  userProfile = signal<UserProfile>({
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Angular developer passionate about building modern web applications with the latest features.",
  })

  /**
   * Update a specific field in the user profile
   */
  updateProfile(field: keyof UserProfile, value: string): void {
    this.userProfile.update((profile) => ({
      ...profile,
      [field]: value,
    }))
  }
}
