import { ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { MenuNavigationService } from './menu-navigation.service';
export declare class MenuNavigationItemDirective implements OnDestroy {
    private _service;
    private _elementRef;
    activated: EventEmitter<{}>;
    private _subscription;
    constructor(_service: MenuNavigationService, _elementRef: ElementRef);
    ngOnDestroy(): void;
    setActive(): void;
}