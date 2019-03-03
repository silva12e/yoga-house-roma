import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {
    isModalActive: boolean;

    constructor() {
        this.isModalActive = false;
    }

    toggleModal(): void {
        this.isModalActive = !this.isModalActive;
    }
}
