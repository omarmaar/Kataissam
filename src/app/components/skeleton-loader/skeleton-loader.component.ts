import { Component, Input } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-skeleton-loader",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="skeleton-loader" 
      [ngStyle]="{ 
        'width': width, 
        'height': height, 
        'border-radius': borderRadius 
      }"
      [ngClass]="{ 'animate': animate }"
    ></div>
  `,
  styles: [
    `
    .skeleton-loader {
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: none;
    }
    
    .animate {
      animation: shimmer 1.5s infinite;
    }
    
    @keyframes shimmer {
      0% {
        background-position: 200% 0;
      }
      100% {
        background-position: -200% 0;
      }
    }
  `,
  ],
})
export class SkeletonLoaderComponent {
  /**
   * Width of the skeleton loader
   */
  @Input() width = "100%"

  /**
   * Height of the skeleton loader
   */
  @Input() height = "20px"

  /**
   * Border radius of the skeleton loader
   */
  @Input() borderRadius = "4px"

  /**
   * Whether to animate the skeleton loader
   */
  @Input() animate = true
}
