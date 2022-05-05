import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sentenceOne: string = "Hello there..."
  sentenceTwo: string = "My name is Caitlin..."
  sentenceThree: string = "And I am a Full Stack Developer."

  oneLine=true;
  currentText: string = '';
  textTwo:string = '';
  x: any;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.typeSentence(this.sentenceOne);
    }, 1000);
  }

  ngOnDestroy(): void {
    this.currentText = '';
    this.textTwo = '';
    this.oneLine = true;
    clearInterval(this.x);
  }

  typeSentence(sentence:string) {
    this.x = setInterval(() => {
      this.currentText = sentence.slice(0, this.currentText.length + 1);
      if(this.currentText == sentence && this.sentenceOne == sentence) {
        clearInterval(this.x);
        setTimeout(() => {
          this.clearSentence();
        }, 1000);
      } else if(this.currentText == sentence && this.sentenceTwo == sentence) {
        clearInterval(this.x);
        setTimeout(() => {
          this.typeNewLine(this.sentenceThree);
        }, 1000);
      }
    }, 200);
  }

  clearSentence() {
    this.x = setInterval(()=> {
      this.currentText = this.currentText.slice(0, this.currentText.length - 1);
      if(this.currentText.length == 0) {
        clearInterval(this.x);
        setTimeout(() => {
          this.typeSentence(this.sentenceTwo);
        }, 1000);
      }
    }, 100);
  }

  typeNewLine(sentence: string){
    this.oneLine = false;
    this.x = setInterval(() => {
      this.textTwo = sentence.slice(0, this.textTwo.length + 1);
      if(this.textTwo == sentence) {
        clearInterval(this.x);
      }
    }, 200);
  }
}
