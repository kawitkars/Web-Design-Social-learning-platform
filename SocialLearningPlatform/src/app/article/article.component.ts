import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  private photo: SafeStyle;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.photo = 'assets/image/articles.jpeg';
  }

}
