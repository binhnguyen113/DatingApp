import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent {
    member!: Member;
    galleryOptions!: NgxGalleryOptions[];
    galleryImages!: NgxGalleryImage[];

    constructor(private memberService: MembersService, private route: ActivatedRoute) { }
    ngOnInit() {
      this.loadMember();
      this.galleryOptions = [
        {
          width: '500px',
          height: '500px',
          imagePercent: 100,
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide,
          preview: false
        }
      ]
      this.galleryImages = this.getImages();
    }
    getImages(): NgxGalleryImage[] {
      const imageUrls = [];
      // Kiểm tra xem this.member đã được xác định trước khi cố gắng truy cập thuộc tính photos
      if (this.member && this.member.photos) {
        for (const photo of this.member.photos) {
          imageUrls.push({
            small: photo?.url,
            medium: photo?.url,
            big: photo?.url
          });
        }
      }
      return imageUrls;
    }
    

    loadMember(){
      this.memberService.getMember(this.route.snapshot.paramMap.get('username')!).subscribe(member =>{
        this.member = member;
        this.galleryImages = this.getImages();
      })
    }
}
