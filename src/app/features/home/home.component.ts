import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

interface CarouselImage {
  src: string;
  alt: string;
}

interface ImagePair {
  top: CarouselImage;
  bottom: CarouselImage;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '/src/styles/responsive.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('bannerVideo') bannerVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('count') count!: ElementRef;

  public satisfactionCount: number = 0;
  public successCount: number = 0;
  public servicesCount: number = 0;

  public satisfactionCountStop: any;
  public successCountStop: any;
  public servicesStop: any;

  public imagePairs: ImagePair[] = [];
  public feedbackImages: CarouselImage[] = [];
  public blogImages: CarouselImage[] = [];
  public responsiveOptions: any[] = [];
  private videoAttempts = 0;
  private maxAttempts = 3;

  constructor(private router: Router) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {
    this.feedbackImages = [
      {
        src: 'assets/feedback/Lucas Brenner.png',
        alt: 'comentario do Lucas Brenner sobre o escritório',
      },
      {
        src: 'assets/feedback/Jonatas Lamartine.png',
        alt: 'comentario do Jonatas Lamartine sobre o escritório',
      },
      {
        src: 'assets/feedback/Elza Monteiro.png',
        alt: 'comentario do Elza Monteiro sobre o escritório',
      },
      {
        src: 'assets/feedback/Jô Santos.png',
        alt: 'comentario do Jô Santos sobre o escritório',
      },
      {
        src: 'assets/feedback/Josinaldo Clauze.png',
        alt: 'comentario do Josinaldo Clauze sobre o escritório',
      },
      {
        src: 'assets/feedback/Rayan Victor.png',
        alt: 'comentario do Rayan Victor sobre o escritório',
      },
    ];

    this.blogImages = [
      { src: 'assets/blog/blog.png', alt: 'blog 1' },
      { src: 'assets/blog/blog.png', alt: 'blog 2' },
      { src: 'assets/blog/blog.png', alt: 'blog 3' },
      { src: 'assets/blog/blog.png', alt: 'blog 4' },
      { src: 'assets/blog/blog.png', alt: 'blog 5' },
      { src: 'assets/blog/blog.png', alt: 'blog 6' },
    ];

    this.imagePairs = this.pairImages(this.feedbackImages);

    // Tenta reproduzir o vídeo quando a rota muda
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.playVideo();
      });
  }

  ngAfterViewInit() {
    this.setupVideo();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.startCounting();
          observer.unobserve(entry.target); // Para a observação após começar a contagem
        }
      });
    });

    observer.observe(this.count.nativeElement);
  }

  private setupVideo() {
    const video = this.bannerVideo.nativeElement;

    video.muted = true;
    video.setAttribute('playsinline', '');
    video.load();

    // Tenta reproduzir o vídeo quando estiver pronto
    video.addEventListener('canplay', () => {
      this.playVideo();
    });

    // Tenta reproduzir o vídeo imediatamente
    this.playVideo();
  }

  private playVideo() {
    if (this.videoAttempts >= this.maxAttempts) {
      console.warn('Máximo de tentativas de reprodução do vídeo atingido.');
      return;
    }

    const video = this.bannerVideo.nativeElement;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Reprodução iniciada com sucesso
          this.videoAttempts = 0;
        })
        .catch((error) => {
          console.error('Erro ao tentar reproduzir o vídeo:', error);
          this.videoAttempts++;

          // Tenta novamente após um breve delay
          setTimeout(() => this.playVideo(), 1000);
        });
    }
  }

  pairImages(feedbackImages: CarouselImage[]): ImagePair[] {
    const pairs: ImagePair[] = [];
    for (let i = 0; i < feedbackImages.length; i += 2) {
      pairs.push({
        top: feedbackImages[i],
        bottom: feedbackImages[i + 1] || feedbackImages[0],
      });
    }
    return pairs;
  }

  public tryPlayVideo() {
    this.videoAttempts = 0;
    this.playVideo();
  }

  startCounting() {
    this.satisfactionCountStop = setInterval(() => {
      this.satisfactionCount++;
      if (this.satisfactionCount == 100) {
        clearInterval(this.satisfactionCountStop);
      }
    }, 30);

    this.successCountStop = setInterval(() => {
      this.successCount++;
      if (this.successCount == 700) {
        clearInterval(this.successCountStop);
      }
    }, 3);

    this.servicesStop = setInterval(() => {
      this.servicesCount++;
      if (this.servicesCount == 5) {
        clearInterval(this.servicesStop);
      }
    }, 700);
  }
}
