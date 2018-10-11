import {  Component, ComponentFactoryResolver, OnInit, Injector, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HelloComponent } from './hello/hello.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Componente Criado';

  constructor(
      private resolver: ComponentFactoryResolver,
      private injector: Injector,
      @Inject(DOCUMENT) private document: Document
  ) {
  }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(HelloComponent);
    const componentRef = factory.create(this.injector);

    componentRef.instance.name = 'Componente Criado Sistemicamente' ;
    componentRef.hostView.detectChanges();

    const { nativeElement } = componentRef.location;
    this.document.body.appendChild(nativeElement);

  }
}
