import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SelectItem } from '../../../../core/interfaces/select-item.interface';
import { Observable } from 'rxjs';
import { untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';

export interface FilteredSelectItem {
  label: string;
  value: string;
  focus: boolean;
}

@Component( {
  selector: 'app-f-c-tag-select',
  templateUrl: './f-c-tag-select.component.html',
  styleUrls: [ './f-c-tag-select.component.scss' ]
} )
export class FCTagSelectComponent implements OnInit, OnDestroy {

  @ViewChild("searchInput") searchInputRef: ElementRef;
  @ViewChild("searchAutocompleteWrap") searchAutocompleteWrapRef: ElementRef;

  @Input() filterFunction: (searchInput: string) => Observable<SelectItem[]>;

  @Input() maxItems = 10;

  public isSearchAutocompleteOpen = false;
  public filteredItems: FilteredSelectItem[] = [];

  private filteredItemFocusIndex: number | null = null;
  private selectedItems: SelectItem[] = [];
  private windowEventHandler: EventListener;

  private formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initFormGroup();
    this.initWindowEventHandler();
  }

  public openSearchAutocomplete(): void {
    this.isSearchAutocompleteOpen = true;
  }

  public closeSearchAutocomplete(): void {
    this.isSearchAutocompleteOpen = false;
  }

  public onSearchInputInput( event ): void {
    this.filteredItemFocusIndex = null;
    if (event.target === undefined && event.target.value === undefined) {
      if (!environment.production) {
        console.warn('Can\'t read target input value!', event);
      }
      return;
    }
    const searchInput = event.target.value.toLowerCase();
    if (searchInput === '') {
      this.clearFilteredItems();
      return;
    }
    this.filterItems(searchInput);
  }

  public onSearchInputFocus(): void {
    this.openSearchAutocomplete();
  }

  public onSearchInputKeyDown( event: KeyboardEvent): void {
    switch ( event.code ) {
      case 'ArrowDown': {
        if ( this.filteredItems.length === 0 ) {
          return;
        }
        if (this.filteredItemFocusIndex === null) {
          this.filteredItemsFocusNext();
        } else if (this.filteredItemFocusIndex === this.filteredItems.length -1) {
        } else {
          this.filteredItemsFocusNext();
        }
        this.setFocusToFilteredItem(this.filteredItemFocusIndex);
        break;
      }
      case 'ArrowUp': {
        if ( this.filteredItems.length === 0 ) {
          return;
        }
        if (this.filteredItemFocusIndex === null) {
          return;
        } else if (this.filteredItemFocusIndex === 0) {
          this.filteredItemFocusIndex = null;
          const searchValue = this.getSearchInputValue();
          this.patchValue('');
          this.patchValue(searchValue);
        } else {
          this.filteredItemsFocusPrevious();
        }
        this.setFocusToFilteredItem(this.filteredItemFocusIndex);
        break;
      }
      case 'Enter': {
        if ( this.filteredItems.length === 0 ) {
          return;
        }
        if (this.filteredItemFocusIndex === null) {
          break;
        }
        const item = this.filteredItems[this.filteredItemFocusIndex];
        if (!this.isItemSelected(item)) {
          this.addItemToSelectedItems(item);
          this.filteredItemFocusIndex = null;
          this.clearSearchInput();
          this.clearFilteredItems();
        }
        break;
      }
      case 'Escape': {
        if (this.getSearchInputValue() !== '') {
        this.filteredItemFocusIndex = null;
        this.clearSearchInput();
        this.clearFilteredItems();
        }
        break;
      }
    }
  }

  public onItemClick( item: SelectItem ): void {
    this.setFocusToSearchInput();
    if (!this.isItemSelected(item)) {
      this.addItemToSelectedItems( item );
      this.clearSearchInput();
      this.clearFilteredItems();
    }
  }

  public onItemMouseEnter(item: FilteredSelectItem): void {
    this.filteredItemFocusIndex = this.filteredItems.indexOf(item);
    this.setFocusToFilteredItem(this.filteredItemFocusIndex);
  }

  public onClearSearchInputClick(): void {
    this.clearSearchInput();
    this.setFocusToSearchInput();
    this.clearFilteredItems();
  }

  public isSearchInputEmpty(): boolean {
    return this.formGroup.value.searchInput.length === 0;
  }

  private filteredItemsFocusNext(): void {
    if ( this.filteredItems.length === 0 ) {
      return;
    }
    let loop = true;
    let index = this.filteredItemFocusIndex;
    if (index === null) {
      index = -1;
    }
    while(loop) {
      const nextItem = this.filteredItems[index + 1];
      if (typeof nextItem !== 'undefined') {
        if (!this.isItemSelected(nextItem)) {
          index++;
          loop = false;
        } else {
          index++;
        }
      } else {
        loop = false;
        index = this.filteredItemFocusIndex;
      }
    }
    this.filteredItemFocusIndex = index;
  }

  private filteredItemsFocusPrevious(): void {
    if ( this.filteredItems.length === 0 ) {
      return;
    }
    let loop = true;
    let index = this.filteredItemFocusIndex;
    while(loop) {
      const nextItem = this.filteredItems[index - 1];
      if (typeof nextItem !== 'undefined') {
        if (!this.isItemSelected(nextItem)) {
          index--;
          loop = false;
        } else {
          index--;
        }
      } else {
        loop = false;
        index = null;
      }
    }
    this.filteredItemFocusIndex = index;
  }

  private initFormGroup(): void {
    this.formGroup = this.fb.group({
      searchInput: ['']
    });
  }

  private addItemToSelectedItems(item: SelectItem): void {
    this.selectedItems.push(item);
  }

  private removeItemFromSelectedItems(item: SelectItem): void {
    const selectedItemIndex = this.selectedItems.indexOf(item);
    if (selectedItemIndex === -1) {
      if (!environment.production) {
        console.warn(`Can't find item "${item.label}" in selectedItems array!`);
      }
    }
    this.selectedItems.splice(selectedItemIndex, 1);
  }

  private filterItems(searchInput: string): void {
    this.filterFunction(searchInput).pipe(untilComponentDestroyed(this)).subscribe(
      res => {
        const filteredItems = this.transformItemsToFilteredItems(res);
        if (filteredItems.length > this.maxItems) {
          this.filteredItems = this.transformItemsToFilteredItems(
            filteredItems.slice( 0, this.maxItems )
          );
        } else {
          this.filteredItems = filteredItems;
        }
        this.markSearchInput(searchInput);
      }, err => {
        if (!environment.production) {
          console.error(err);
        }
      }
    );
  }

  private markSearchInput(searchInput: string): void {
    this.filteredItems.forEach(
      filteredItem => {
        const start = filteredItem.label.toLowerCase().indexOf(searchInput);
        const end = start + searchInput.length + 1;
        const labelArray = filteredItem.label.split('');
        labelArray
          .splice(start, 0, '<strong>');
        labelArray
          .splice(end, 0, '</strong>');

        filteredItem.label = labelArray.join('');
      }
    );
  }

  public isItemSelected(item: SelectItem): boolean {
    return this.selectedItems.some(selectedItem => {
      return selectedItem.label ===  item.label && selectedItem.value === item.value;
    });
  }

  private clearFilteredItems(): void {
    this.filteredItems = [];
  }

  private clearSearchInput(): void {
    this.patchValue('');
  }

  private patchValue(value: string): void {
    this.formGroup.patchValue({
      searchInput: value
    })
  }

  private getSearchInputValue(): string {
    return this.formGroup.value.searchInput;
  }

  private setFocusToSearchInput(): void {
    this.searchInputRef.nativeElement.focus();
  }

  private transformItemToFilteredItem(item: SelectItem): FilteredSelectItem {
    return {
      label: item.label,
      value: item.value,
      focus: false
    }
  }

  private transformItemsToFilteredItems(items: SelectItem[]): FilteredSelectItem[] {
    return items.map(item => this.transformItemToFilteredItem(item));
  }

  private setFocusToFilteredItem(itemIndex: number | null): void {
    if ( this.filteredItems.length === 0 ) {
      return;
    }
    this.filteredItems.forEach((item, index) => {
      if (item.focus) {
        item.focus = false;
      }
      if (itemIndex === index) {
        item.focus = true;
      }
    });
  }

  private initWindowEventHandler(): void {
    this.windowEventHandler = (event) => {
      const targetElement = event.target as HTMLElement;
      if (!targetElement || typeof targetElement.classList === undefined) {
        return;
      }
      if (!targetElement.classList.contains('close-not-on-click')) {
        this.closeSearchAutocomplete();
      }
    };
    window.addEventListener('click', this.windowEventHandler);
  }

  ngOnDestroy(): void {
    window.removeEventListener('click', this.windowEventHandler);
  }
}
