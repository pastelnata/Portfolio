import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoChips } from './info-chips';

describe('InfoChips', () => {
    let component: InfoChips;
    let fixture: ComponentFixture<InfoChips>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [InfoChips]
        }).compileComponents();

        fixture = TestBed.createComponent(InfoChips);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
